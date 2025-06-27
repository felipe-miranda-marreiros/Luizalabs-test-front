import { productMock } from '../Product/productMock'
import { HttpResponse, http } from 'msw'
import { BASE_URL } from '@/shared/api'
import { wishMocks } from './wishMock'

const WISH_PATH = '/api/wish'
export const WISH_FULL_URL = `${BASE_URL}${WISH_PATH}`

export const wishHandlers = [
  http.get(WISH_FULL_URL, () => {
    return HttpResponse.json(wishMocks.wishListMock, { status: 200 })
  }),
  http.get(WISH_FULL_URL + '/list', () => {
    return HttpResponse.json(wishMocks.wishMock, { status: 200 })
  }),
  http.delete(WISH_FULL_URL, () => {
    wishMocks.wishListMock = []
    return HttpResponse.json(null, { status: 200 })
  }),
  http.post(WISH_FULL_URL + '/:product_id', ({ params }) => {
    const { product_id } = params
    const id = parseInt(product_id as string)
    const productExists = wishMocks.wishMock.items.includes(id)
    if (productExists) {
      wishMocks.wishListMock = wishMocks.wishListMock.filter(
        (product) => product.id !== id
      )
      wishMocks.wishMock.count = wishMocks.wishListMock.length
      wishMocks.wishMock.items = wishMocks.wishListMock.map(
        (product) => product.id
      )
    } else {
      const product = productMock.productMockResponse.find(
        (product) => product.id === id
      )
      if (!product) {
        return HttpResponse.json(
          {
            errors: [
              {
                message: 'Produto não existe'
              }
            ]
          },
          { status: 404 }
        )
      }
      wishMocks.wishListMock.push(product)
      wishMocks.wishMock.count = wishMocks.wishListMock.length
      wishMocks.wishMock.items = wishMocks.wishListMock.map(
        (product) => product.id
      )
    }
    return HttpResponse.json(wishMocks.wishMock, { status: 200 })
  })
]

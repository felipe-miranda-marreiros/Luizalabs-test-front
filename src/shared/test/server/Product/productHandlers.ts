import { BASE_URL } from '@/shared/api'
import { HttpResponse, http } from 'msw'
import { productMock } from './productMock'

const PRODUCT_PATH = '/products'
const FULL_URL = `${BASE_URL}${PRODUCT_PATH}`

export const productHandlers = [
  http.get(FULL_URL, () => {
    return HttpResponse.json(productMock.productMockResponse, { status: 200 })
  })
]

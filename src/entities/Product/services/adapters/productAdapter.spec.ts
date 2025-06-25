import type { Product, ProductAPI } from '../../models/product'
import { productAdapters } from './productAdapter'

describe('productAdapter', () => {
  const productApiMock: ProductAPI = {
    id: 1,
    title: 'Test Product',
    price: 99.99,
    description: 'This is a test product',
    category: 'electronics',
    image: 'http://example.com/image.jpg',
    rating: {
      rate: 4.5,
      count: 120
    }
  }

  it('Should adapt a ProductAPI to Product correctly', () => {
    const adapted: Product = productAdapters.productAdapter(productApiMock)

    expect(adapted).toEqual({
      id: '1',
      title: 'Test Product',
      amount: 99.99,
      description: 'This is a test product',
      category: 'electronics',
      image: 'http://example.com/image.jpg',
      rating: {
        rate: 4.5,
        count: 120
      }
    })
  })
})

describe('productListAdapter', () => {
  it('Should adapt a list of ProductAPI to Product[]', () => {
    const productsApiMock: ProductAPI[] = [
      {
        id: 1,
        title: 'Product 1',
        price: 10,
        description: 'Desc 1',
        category: 'cat1',
        image: 'img1.jpg',
        rating: { rate: 4.1, count: 10 }
      },
      {
        id: 2,
        title: 'Product 2',
        price: 20,
        description: 'Desc 2',
        category: 'cat2',
        image: 'img2.jpg',
        rating: { rate: 3.5, count: 8 }
      }
    ]

    const adapted = productAdapters.productListAdapter(productsApiMock)

    expect(adapted).toHaveLength(2)
    expect(adapted[0].id).toBe('1')
    expect(adapted[1].id).toBe('2')
    expect(adapted[0].amount).toBe(10)
    expect(adapted[1].amount).toBe(20)
  })
})

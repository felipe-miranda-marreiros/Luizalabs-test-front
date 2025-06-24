export interface Product {
  id: string
  description: string
  title: string
  amount: number
  image: string
  category: string
  rating: {
    rate: number
    count: number
  }
}

export interface ProductAPI {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}

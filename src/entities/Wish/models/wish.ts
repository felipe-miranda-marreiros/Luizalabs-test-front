export interface WishAPI {
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

export interface WishesAPI {
  count: number
  items: number[]
}

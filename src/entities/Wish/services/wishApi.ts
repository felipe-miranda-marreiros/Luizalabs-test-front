import type { ProductAPI } from '@/entities/Product'
import type { WishesAPI } from '../models/wish'
import { api } from '@/shared/api'

async function wishList(): Promise<ProductAPI[]> {
  const response = await api.get<ProductAPI[]>('/api/wish/products')
  return response.data
}

async function wishes(): Promise<WishesAPI> {
  const response = await api.get<WishesAPI>('/api/wish/current')
  return response.data
}

async function addOrRemove(productId: number): Promise<WishesAPI> {
  const response = await api.post<WishesAPI>(`/api/wish/product/${productId}`)
  return response.data
}

async function removeWishList(): Promise<void> {
  await api.delete<WishesAPI>('/api/wish')
}

export const wishApi = {
  wishList,
  wishes,
  addOrRemove,
  removeWishList
}

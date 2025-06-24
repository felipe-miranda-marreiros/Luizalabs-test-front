import { api } from '@/shared/api'
import type { ProductAPI } from '../models/product'

async function productList(): Promise<ProductAPI[]> {
  const response = await api.get<ProductAPI[]>('/products')
  return response.data
}

export const productApi = {
  productList
}

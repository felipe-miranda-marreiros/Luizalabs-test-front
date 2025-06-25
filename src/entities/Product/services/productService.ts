import type { Product } from '../models/product'
import { productAdapters } from './adapters/productAdapter'
import { productApi } from './productApi'

async function productList(): Promise<Product[]> {
  const response = await productApi.productList()
  return productAdapters.productListAdapter(response)
}

export const productService = {
  productList
}

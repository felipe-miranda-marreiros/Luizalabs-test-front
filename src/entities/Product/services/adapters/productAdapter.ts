import type { Product, ProductAPI } from '../../models/product'

function productAdapter(api: ProductAPI): Product {
  return {
    amount: api.price,
    category: api.category,
    description: api.description,
    id: api.id.toString(),
    image: api.image,
    rating: {
      count: api.rating.count,
      rate: api.rating.rate
    },
    title: api.title
  }
}

function productListAdapter(products: ProductAPI[]): Product[] {
  return products.map(productAdapter)
}

export const productAdapters = {
  productAdapter,
  productListAdapter
}

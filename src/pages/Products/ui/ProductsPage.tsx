import { ProductList } from './components/ProductList/ProductList'

export function ProductsPage() {
  return (
    <div>
      <h2 className="my-7 pb-3.5 text-4xl border-b border-b-gray-50/10">
        Produtos
      </h2>
      <ProductList />
    </div>
  )
}

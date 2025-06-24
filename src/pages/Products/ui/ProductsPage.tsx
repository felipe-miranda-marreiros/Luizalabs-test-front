import { ProductItem, useProductList } from '@/entities/Product'

export function ProductsPage() {
  const { data } = useProductList()

  return (
    <div>
      <h2 className="my-7 pb-3.5 text-4xl border-b border-b-gray-50/10">
        Produtos
      </h2>
      <div className="grid grid-cols-3 gap-3.5">
        {data?.map((product) => {
          return <ProductItem key={product.id} {...product} />
        })}
      </div>
    </div>
  )
}

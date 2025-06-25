import { useProductList } from '@/entities/Product'
import { ProductItem } from './ProductItem'

export function ProductList() {
  const { data } = useProductList()

  return (
    <div className="grid grid-cols-3 gap-3.5">
      {data?.map((product) => {
        return <ProductItem {...product} />
      })}
    </div>
  )
}

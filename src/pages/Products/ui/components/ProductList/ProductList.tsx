import { useProductList } from '@/entities/Product'
import { ProductItem } from './ProductItem'
import { Loader2Icon } from 'lucide-react'

export function ProductList() {
  const { data, isLoading } = useProductList()

  if (isLoading) {
    return <Loader2Icon size={40} className="animate-spin mx-auto" />
  }

  return (
    <div className="grid grid-cols-3 gap-3.5">
      {data?.map((product) => {
        return <ProductItem key={product.id} {...product} />
      })}
    </div>
  )
}

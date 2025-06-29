import { useProductList } from '@/entities/Product'
import { ProductItem } from './ProductItem'
import { Loader2Icon } from 'lucide-react'

export function ProductList() {
  const { data, isLoading, isError } = useProductList()

  if (isLoading) {
    return <Loader2Icon size={40} className="animate-spin mx-auto" />
  }

  if (isError) {
    return (
      <div className="text-center">
        <p>Ocorreu um erro ao buscar produtos.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5">
      {data?.map((product) => {
        return <ProductItem key={product.id} {...product} />
      })}
    </div>
  )
}

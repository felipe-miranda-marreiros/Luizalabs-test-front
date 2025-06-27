import { useWishList } from '@/entities/Wish'
import { WishItem } from './WishItem'
import { RemoveWishList } from '../RemoveWishList/RemoveWishList'
import { Loader2Icon } from 'lucide-react'

export function WishList() {
  const { data, isLoading } = useWishList()

  if (isLoading) {
    return (
      <Loader2Icon
        data-testid="spinner"
        size={40}
        className="animate-spin mx-auto"
      />
    )
  }

  if (!data || data.length === 0) {
    return (
      <div className="grid place-content-center text-center">
        <p>Sua lista de favoritos está vazia.</p>
        <p>Tente adicionar novos itens.</p>
      </div>
    )
  }

  return (
    <div>
      {data.length > 0 && (
        <div className="mb-3.5">
          <RemoveWishList />
        </div>
      )}
      <div className="flex flex-col gap-4">
        {data?.map((product) => {
          return <WishItem key={product.id} {...product} />
        })}
      </div>
    </div>
  )
}

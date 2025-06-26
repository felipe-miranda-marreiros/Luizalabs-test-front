import { useWishList } from '@/entities/Wish'
import { WishItem } from './WishItem'

export function WishList() {
  const { data } = useWishList()

  return (
    <div className="flex flex-col gap-4">
      {data?.map((product) => {
        return <WishItem key={product.id} {...product} />
      })}
    </div>
  )
}

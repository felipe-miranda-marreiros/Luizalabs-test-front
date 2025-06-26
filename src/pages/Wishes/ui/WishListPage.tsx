import { WishList } from '../components/WishList/WishList'

export function WishListPage() {
  return (
    <div>
      <h2 className="my-7 pb-3.5 text-4xl border-b border-b-gray-50/10">
        Favoritos
      </h2>
      <WishList />
    </div>
  )
}

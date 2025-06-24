import { currencyUtil } from '@/shared/utils'
import type { Product } from '../models/product'
import { StarRating } from './components/StarRating'
import { Favorite } from './components/Favorite'

export function ProductItem(props: Product) {
  return (
    <article className="flex flex-col border bg-gray-50 text-black border-gray-50/10 rounded-2xl p-3.5">
      <div className="flex gap-3.5 mb-3.5 self-end">
        <StarRating count={props.rating.count} rating={props.rating.rate} />
        <Favorite isOnWishList={true} />
      </div>
      <div className="flex-1 mx-auto">
        <img
          className="flex-1 h-[200px] w-[200px] rounded-2xl"
          src={props.image}
          alt={props.title}
        />
      </div>
      <div className="flex-1 space-y-3.5 mt-3.5">
        <p className="text-xl text-red-500">{props.title}</p>
        <p className="text-2xl font-bold">
          {currencyUtil.formatterBRL(props.amount)}
        </p>
        <p className="truncate">{props.description}</p>
      </div>
    </article>
  )
}

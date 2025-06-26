import type { Product } from '@/entities/Product'
import { Favorite } from '@/entities/Wish/ui/Favorite'
import { currencyUtil } from '@/shared/utils'

export function WishItem(props: Product) {
  return (
    <article className="border border-gray-50/5 p-4">
      <div className="flex gap-4 items-center">
        <div className="flex-[0.5]">
          <img
            className="flex-1 h-[130px] w-[130px] rounded-2xl"
            src={props.image}
            alt={props.title}
          />
        </div>
        <div className="flex-3 space-y-3.5">
          <p className="text-xl text-red-500">{props.title}</p>
          <p className="text-2xl font-bold">
            {currencyUtil.formatterBRL(props.amount)}
          </p>
          <p>{props.description}</p>
        </div>
        <div className="self-start">
          <Favorite id={props.id} />
        </div>
      </div>
    </article>
  )
}

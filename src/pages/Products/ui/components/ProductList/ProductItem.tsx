import {
  ProductContainer,
  ProductContent,
  ProductHeader,
  ProductImage,
  type Product
} from '@/entities/Product'
import { Favorite } from '@/entities/Wish/ui/Favorite'
import { StarRating } from '@/shared/components/ui/start-rating'

export function ProductItem(product: Product) {
  return (
    <ProductContainer>
      <ProductHeader>
        <StarRating count={product.rating.count} rating={product.rating.rate} />
        <Favorite id={product.id} />
      </ProductHeader>
      <ProductImage image={product.image} title={product.title} />
      <ProductContent
        amount={product.amount}
        description={product.description}
        title={product.title}
      />
    </ProductContainer>
  )
}

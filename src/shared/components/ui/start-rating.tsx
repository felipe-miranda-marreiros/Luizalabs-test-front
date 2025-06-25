import { Star, StarHalf, StarOff } from 'lucide-react'

interface StarRatingProps {
  rating: number
  max?: number
  size?: number
  count?: number
}

export function StarRating({ rating, max = 5, size = 14 }: StarRatingProps) {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 >= 0.25 && rating % 1 < 0.75
  const emptyStars = max - fullStars - (hasHalfStar ? 1 : 0)

  return (
    <div title={rating.toString()} className={`flex items-center gap-1 `}>
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} size={size} fill="gold" stroke="gold" />
      ))}

      {hasHalfStar && <StarHalf size={size} fill="gold" stroke="gold" />}

      {[...Array(emptyStars)].map((_, i) => (
        <StarOff key={`empty-${i}`} size={size} stroke="#ccc" />
      ))}
    </div>
  )
}

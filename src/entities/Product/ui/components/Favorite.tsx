import { cn } from '@/shared/lib'
import { Heart } from 'lucide-react'
import { useState } from 'react'

interface FavoriteProps {
  isOnWishList: boolean
}

export function Favorite({ isOnWishList }: FavoriteProps) {
  const [isFavorite, setIsFavorite] = useState(isOnWishList)

  function onToggle() {
    setIsFavorite((prevState) => !prevState)
  }

  return (
    <button
      title={isFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
      className="cursor-pointer"
      onClick={onToggle}
      type="button"
    >
      <Heart className={cn(isFavorite && 'fill-red-500')} />
    </button>
  )
}

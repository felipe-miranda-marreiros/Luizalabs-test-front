import { cn } from '@/shared/lib'
import { Heart } from 'lucide-react'
import { useToggleFavorite } from '../hooks/useToggleFavorite'

interface FavoriteProps {
  id: string
}

export function Favorite({ id }: FavoriteProps) {
  const { isFavorite, onToggle } = useToggleFavorite(id)

  function onClick() {
    onToggle()
  }

  return (
    <button
      title={isFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
      className="cursor-pointer"
      onClick={onClick}
      type="button"
    >
      <Heart className={cn(isFavorite && 'fill-red-500')} />
    </button>
  )
}

import { cn } from '@/shared/lib'
import { Heart, Loader2Icon } from 'lucide-react'
import { useToggleFavorite } from '../hooks/useToggleFavorite'

interface FavoriteProps {
  id: string
}

export function Favorite({ id }: FavoriteProps) {
  const { isFavorite, onToggle, isPending } = useToggleFavorite(id)

  function onClick() {
    onToggle()
  }

  if (isPending) {
    return <Loader2Icon className="animate-spin" />
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

import { cn } from '@/shared/lib'
import { Heart } from 'lucide-react'
import { useState } from 'react'
import { useToggleFavorite } from '../hooks/useToggleFavorite'
import { wishListService } from '../services/wishListService'
import { useQueryClient } from '@tanstack/react-query'

interface FavoriteProps {
  id: string
}

export function Favorite({ id }: FavoriteProps) {
  const [isFavorite, setIsFavorite] = useState(() =>
    wishListService.isOnWishList(parseInt(id))
  )
  const { mutate } = useToggleFavorite()
  const queryClient = useQueryClient()

  function onToggle() {
    mutate(parseInt(id), {
      onSuccess: async () => {
        setIsFavorite((prevState) => !prevState)
        await queryClient.invalidateQueries({ queryKey: ['FAVORITE_COUNT'] })
      },
      onError: (err) => {
        console.log(err)
      }
    })
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

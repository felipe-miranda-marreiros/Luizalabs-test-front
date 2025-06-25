import { useMutation, useQueryClient } from '@tanstack/react-query'
import { wishListService } from '../services/wishListService'
import { useState } from 'react'

export function useToggleFavorite(id: string) {
  const [isFavorite, setIsFavorite] = useState(() =>
    wishListService.isOnWishList(parseInt(id))
  )
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: () => wishListService.add(parseInt(id)),
    onSuccess: async () => {
      setIsFavorite((prevState) => !prevState)
      await queryClient.invalidateQueries({ queryKey: ['FAVORITE_COUNT'] })
    },
    onError: () => {
      setIsFavorite(false)
    }
  })

  return {
    isFavorite,
    onToggle: mutation.mutate
  }
}

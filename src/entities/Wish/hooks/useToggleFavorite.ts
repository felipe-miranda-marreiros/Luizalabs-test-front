import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { wishService } from '../services/wishService'
import { wishApi } from '../services/wishApi'

export function useToggleFavorite(id: string) {
  const [isFavorite, setIsFavorite] = useState(() =>
    wishService.isOnWishList(parseInt(id))
  )
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: async () => {
      wishService.add(parseInt(id))
      await wishApi.addOrRemove(parseInt(id))
    },
    onSuccess: async () => {
      setIsFavorite((prevState) => !prevState)
      await queryClient.invalidateQueries({
        queryKey: ['SETUP_APP']
      })
      await queryClient.invalidateQueries({
        queryKey: ['FAVORITE_COUNT']
      })
      await queryClient.invalidateQueries({
        queryKey: ['WISH_LIST'],
        type: 'all'
      })
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

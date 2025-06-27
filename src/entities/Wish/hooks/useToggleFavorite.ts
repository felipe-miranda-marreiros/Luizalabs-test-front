import { useMutation, useQueryClient } from '@tanstack/react-query'
import { wishService } from '../services/wishService'
import type { ApiError } from '@/shared/types'
import { wishApi } from '../services/wishApi'
import { useNavigate } from 'react-router'
import { toast } from 'sonner'
import { useState } from 'react'

export function useToggleFavorite(id: string) {
  const [isFavorite, setIsFavorite] = useState(() =>
    wishService.isOnWishList(parseInt(id))
  )
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  const mutation = useMutation<void, ApiError, void>({
    mutationFn: async () => {
      await wishApi.addOrRemove(parseInt(id))
      wishService.add(parseInt(id))
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
    onError: (error) => {
      setIsFavorite(false)
      if (error.status === 403) {
        toast('Faça login para continuar')
        navigate('/')
      }
      if (error.status === 400) {
        toast(error.response?.data.errors[0].message)
      }
    }
  })

  return {
    isFavorite,
    onToggle: mutation.mutate,
    isPending: mutation.isPending
  }
}

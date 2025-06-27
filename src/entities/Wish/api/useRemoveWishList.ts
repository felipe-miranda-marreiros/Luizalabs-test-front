import { useMutation } from '@tanstack/react-query'
import { wishService } from '../services/wishService'

export function useRemoveWishList() {
  const mutation = useMutation({
    mutationFn: wishService.removeWishList
  })

  return mutation
}

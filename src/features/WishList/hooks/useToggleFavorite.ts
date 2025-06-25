import { useMutation } from '@tanstack/react-query'
import { wishListService } from '../services/wishListService'

export function useToggleFavorite() {
  const mutation = useMutation({
    mutationFn: (id: number) => wishListService.add(id)
  })
  return mutation
}

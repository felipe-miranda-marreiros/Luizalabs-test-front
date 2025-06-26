import { useQuery } from '@tanstack/react-query'
import { wishService } from '../services/wishService'

export function useWishList() {
  const query = useQuery({
    queryKey: ['WISH_LIST'],
    queryFn: wishService.wishList
  })

  return query
}

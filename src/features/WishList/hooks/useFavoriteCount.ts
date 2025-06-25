import { useQuery } from '@tanstack/react-query'
import { wishListService } from '../services/wishListService'

export function useFavoriteCount() {
  const { data } = useQuery({
    queryKey: ['FAVORITE_COUNT'],
    queryFn: async () => {
      const items = wishListService.get()
      if (!items) {
        return 0
      }
      return items.items.length
    }
  })

  return {
    count: data
  }
}

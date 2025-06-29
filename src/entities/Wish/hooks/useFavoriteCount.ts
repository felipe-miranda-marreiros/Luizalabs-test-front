import { useQuery } from '@tanstack/react-query'
import { wishService } from '../services/wishService'
import { useRef } from 'react'
import { QueryKeys } from '@/shared/api'

export function useFavoriteCount() {
  const attempts = useRef(0)

  const { data } = useQuery({
    queryKey: [QueryKeys.FAVORITE_COUNT],
    refetchInterval: (lastData) => {
      if (lastData.state.data === 0 && attempts.current < 3) {
        attempts.current++
        return 1000
      }
      return false
    },
    queryFn: async () => {
      const items = wishService.get()
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

import { useQuery } from '@tanstack/react-query'
import { wishService } from '../services/wishService'

export function useWishes() {
  const query = useQuery({
    queryKey: ['WISHES'],
    queryFn: wishService.wishes
  })
  return query
}

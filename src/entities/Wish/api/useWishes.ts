import { useQuery } from '@tanstack/react-query'
import { wishService } from '../services/wishService'
import { appService } from '@/entities/AppConfig'

export function useWishes() {
  const query = useQuery({
    queryKey: ['WISHES'],
    queryFn: wishService.wishes,
    enabled: appService.getAppConfig().shouldFetch
  })
  return query
}

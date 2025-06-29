import { useQuery } from '@tanstack/react-query'
import { wishService } from '../services/wishService'
import { appService } from '@/entities/AppConfig'
import { QueryKeys } from '@/shared/api'

export function useWishes() {
  const query = useQuery({
    queryKey: [QueryKeys.WISHES],
    queryFn: wishService.wishes,
    enabled: appService.getAppConfig().shouldFetch
  })
  return query
}

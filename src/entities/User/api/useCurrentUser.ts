import { useQuery } from '@tanstack/react-query'
import { userApi } from '../services/userApi'
import { appService } from '@/entities/AppConfig'

export function useCurrentUser() {
  const query = useQuery({
    queryKey: ['CURRENT_USER'],
    queryFn: userApi.currentUser,
    enabled: appService.getAppConfig().shouldFetch
  })

  return query
}

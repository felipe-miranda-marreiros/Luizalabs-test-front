import { useQuery } from '@tanstack/react-query'
import { appService } from '../services/appConfigService'
import { QueryKeys } from '@/shared/api'

export function useAppConfig() {
  const { isLoading } = useQuery({
    queryKey: [QueryKeys.SETUP_APP],
    queryFn: async () => {
      await appService.setupAppConfig()
      return true
    },
    enabled: appService.getAppConfig().shouldFetch
  })
  return isLoading
}

import { useQuery } from '@tanstack/react-query'
import { appService } from '../services/appConfigService'

export function useAppConfig() {
  const { isLoading } = useQuery({
    queryKey: ['SETUP_APP'],
    queryFn: async () => {
      await appService.setupAppConfig()
      return true
    },
    enabled: appService.getAppConfig().shouldFetch
  })
  return isLoading
}

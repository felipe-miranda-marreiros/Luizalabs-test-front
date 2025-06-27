import { useQuery } from '@tanstack/react-query'
import { type PropsWithChildren } from 'react'
import { appService } from '../services/appConfigService'

function useSetup() {
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

export function Setup({ children }: PropsWithChildren) {
  useSetup()

  return children
}

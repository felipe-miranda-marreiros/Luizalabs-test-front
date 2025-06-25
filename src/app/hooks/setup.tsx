import { wishListService } from '@/features/WishList'
import { useQuery } from '@tanstack/react-query'
import type { PropsWithChildren } from 'react'

function useSetup() {
  const { isLoading } = useQuery({
    queryKey: ['SETUP_APP'],
    queryFn: async () => {
      wishListService.setupListOnLocalStorage()
    }
  })

  return isLoading
}

export function Setup({ children }: PropsWithChildren) {
  const isLoading = useSetup()

  if (isLoading) {
    return <p>Carregando</p>
  }

  return <>{children}</>
}

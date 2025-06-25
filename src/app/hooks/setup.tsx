import { wishListService } from '@/features/WishList'
import { useQuery } from '@tanstack/react-query'
import type { PropsWithChildren } from 'react'

function useSetup() {
  const { isLoading } = useQuery({
    queryKey: ['SETUP_APP'],
    queryFn: wishListService.setupListOnLocalStorage
  })

  return isLoading
}

export function Setup({ children }: PropsWithChildren) {
  useSetup()
  return children
}

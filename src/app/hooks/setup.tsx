import { wishService } from '@/entities/Wish/services/wishService'
import { useQuery } from '@tanstack/react-query'
import type { PropsWithChildren } from 'react'

function useSetup() {
  const { isLoading } = useQuery({
    queryKey: ['SETUP_APP'],
    queryFn: async () => {
      const wishes = await wishService.wishes()
      return wishService.setupListOnLocalStorage(wishes)
    }
  })

  return isLoading
}

export function Setup({ children }: PropsWithChildren) {
  useSetup()
  return children
}

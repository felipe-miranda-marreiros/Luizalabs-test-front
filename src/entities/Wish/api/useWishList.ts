import { useQuery } from '@tanstack/react-query'
import { wishService } from '../services/wishService'
import { appService } from '@/entities/AppConfig'
import { QueryKeys } from '@/shared/api'

export function useWishList() {
  const query = useQuery({
    queryKey: [QueryKeys.WISH_LIST],
    queryFn: wishService.wishList,
    enabled: appService.getAppConfig().shouldFetch
  })

  return query
}

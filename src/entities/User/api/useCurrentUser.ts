import { useQuery } from '@tanstack/react-query'
import { userApi } from '../services/userApi'

export function useCurrentUser() {
  const query = useQuery({
    queryKey: ['CURRENT_USER'],
    queryFn: userApi.currentUser
  })

  return query
}

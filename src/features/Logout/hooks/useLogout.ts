import { wishService } from '@/entities/Wish/services/wishService'
import { api } from '@/shared/api'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router'

export function useLogout() {
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  const mutation = useMutation({
    mutationFn: async () => {
      await api.post('/api/auth/logout')
      wishService.removeList()
    },
    onSuccess: () => {
      logout()
    }
  })

  function logout() {
    queryClient.removeQueries()
    queryClient.resetQueries()
    navigate(0)
  }

  return mutation
}

import { useMutation } from '@tanstack/react-query'
import { loginApi } from '../services/loginApi'

export function useLogin() {
  const mutation = useMutation({
    mutationFn: loginApi.login
  })
  return mutation
}

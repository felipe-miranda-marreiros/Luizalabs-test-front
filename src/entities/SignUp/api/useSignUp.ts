import { useMutation } from '@tanstack/react-query'
import { signUpApi } from '../services/signUpApi'

export function useSignUp() {
  const mutation = useMutation({
    mutationFn: signUpApi.signUp
  })
  return mutation
}

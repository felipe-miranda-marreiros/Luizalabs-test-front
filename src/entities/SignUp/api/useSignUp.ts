import { useMutation } from '@tanstack/react-query'
import { signUpApi } from '../services/signUpApi'
import type { ApiError } from '@/shared/types'
import type { SignUpAPI } from '../models/signUp'

export function useSignUp() {
  const mutation = useMutation<void, ApiError, SignUpAPI>({
    mutationFn: signUpApi.signUp
  })
  return mutation
}

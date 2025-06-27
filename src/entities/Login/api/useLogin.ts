import { useMutation } from '@tanstack/react-query'
import type { ApiError } from '@/shared/types'
import type { LoginAPI } from '../models/login'
import { loginService } from '../services/loginService'

export function useLogin() {
  const mutation = useMutation<void, ApiError, LoginAPI>({
    mutationFn: loginService.login
  })
  return mutation
}

import { api } from '@/shared/api'
import type { LoginAPI } from '../models/login'

async function login(params: LoginAPI): Promise<{ token: string }> {
  const response = await api.post<{ token: string }>(
    '/api/auth/sign-in',
    params,
    {
      withCredentials: true
    }
  )
  return response.data
}

export const loginApi = {
  login
}

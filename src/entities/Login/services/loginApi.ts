import { api } from '@/shared/api'
import type { LoginAPI } from '../models/login'

async function login(params: LoginAPI): Promise<void> {
  await api.post<void>('/api/auth/sign-in', params)
}

export const loginApi = {
  login
}

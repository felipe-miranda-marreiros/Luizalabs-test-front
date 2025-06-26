import type { UserAPI } from '../models/user'
import { api } from '@/shared/api'

async function currentUser(): Promise<UserAPI> {
  const response = await api.get<UserAPI>('/api/users/current-user')
  return response.data
}

export const userApi = {
  currentUser
}

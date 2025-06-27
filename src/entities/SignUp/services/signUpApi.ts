import { api } from '@/shared/api'
import type { SignUpAPI } from '../models/signUp'

async function signUp(params: SignUpAPI): Promise<void> {
  await api.post('/api/auth/sign-up', params)
}

export const signUpApi = {
  signUp
}

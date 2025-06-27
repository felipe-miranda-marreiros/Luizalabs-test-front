import { api } from '@/shared/api'
import type { SignUpAPI } from '../models/signUp'
import { appService } from '@/entities/AppConfig'

async function signUp(params: SignUpAPI): Promise<void> {
  await api.post('/api/auth/sign-up', params)
  appService.setupAppConfigOnLocalStorage({
    shouldFetch: true
  })
}

export const signUpApi = {
  signUp
}

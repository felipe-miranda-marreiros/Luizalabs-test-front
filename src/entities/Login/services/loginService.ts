import { appService } from '@/entities/AppConfig'
import type { LoginAPI } from '../models/login'
import { loginApi } from './loginApi'

async function login(params: LoginAPI) {
  await loginApi.login(params)
  appService.setupAppConfigOnLocalStorage({
    shouldFetch: true
  })
}

export const loginService = {
  login
}

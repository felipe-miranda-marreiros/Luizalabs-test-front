import { loginService } from '../services/loginService'
import type { LoginAPI } from '../models/login'
import { loginApi } from './loginApi'
import { appService } from '@/entities/AppConfig'

const credentials: LoginAPI = {
  email: 'test@example.com',
  password: 'password123'
}

describe('loginService', () => {
  it('Should call loginApi.login with correct credentials', async () => {
    const loginSpy = jest.spyOn(loginApi, 'login').mockResolvedValueOnce()
    await loginService.login(credentials)
    expect(loginSpy).toHaveBeenCalledWith(credentials)
  })

  it('Should set shouldFetch to true in appService after login', async () => {
    jest.spyOn(loginApi, 'login').mockResolvedValueOnce()
    const setupAppConfigOnLocalStorageSpy = jest.spyOn(
      appService,
      'setupAppConfigOnLocalStorage'
    )
    await loginService.login(credentials)
    expect(setupAppConfigOnLocalStorageSpy).toHaveBeenCalledWith({
      shouldFetch: true
    })
  })
})

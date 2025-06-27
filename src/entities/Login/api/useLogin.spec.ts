import { loginService } from '../services/loginService'
import type { LoginAPI } from '../models/login'
import { renderHook } from '@/shared/test/test-utils'
import { useLogin } from './useLogin'
import { act, waitFor } from '@testing-library/react'

const loginMock: LoginAPI = {
  email: 'user@email.com',
  password: '123456'
}

describe('useLogin', () => {
  it('Should call loginService.login with the given credentials', async () => {
    const loginSpy = jest.spyOn(loginService, 'login').mockResolvedValueOnce()
    const { result } = renderHook(() => useLogin())
    await act(async () => {
      result.current.mutate(loginMock)
    })
    expect(loginSpy).toHaveBeenCalledWith(loginMock)
  })

  it('Should expose isPending and error states', async () => {
    jest.spyOn(loginService, 'login').mockRejectedValueOnce(new Error())
    const { result } = renderHook(() => useLogin())
    await act(async () => {
      result.current.mutate(loginMock)
    })
    await waitFor(() => {
      expect(result.current.error).toBeDefined()
      expect(result.current.isPending).toBe(false)
    })
  })
})

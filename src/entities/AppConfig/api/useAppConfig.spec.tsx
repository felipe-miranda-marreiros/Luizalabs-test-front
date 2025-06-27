import { useAppConfig } from './useAppConfig'
import { waitFor } from '@testing-library/dom'
import { appService } from '../services/appConfigService'
import { renderHook } from '@/shared/test/test-utils'

jest.mock('@/entities/AppConfig', () => ({
  AppConfigSetup: ({ children }: { children: React.ReactNode }) => (
    <>{children}</>
  )
}))

describe('useAppConfig', () => {
  it('Should not run query if shouldFetch is false', async () => {
    jest
      .spyOn(appService, 'getAppConfig')
      .mockReturnValueOnce({ shouldFetch: false })
    const setupAppConfigSpy = jest.spyOn(appService, 'setupAppConfig')

    const { result } = renderHook(() => useAppConfig())
    expect(result.current).toBe(false)
    expect(setupAppConfigSpy).not.toHaveBeenCalled()
  })

  it('Should call setupAppConfig if shouldFetch is true', async () => {
    jest
      .spyOn(appService, 'getAppConfig')
      .mockReturnValueOnce({ shouldFetch: true })
    const setupAppConfigSpy = jest
      .spyOn(appService, 'setupAppConfig')
      .mockResolvedValueOnce()

    const { result } = renderHook(() => useAppConfig())

    await waitFor(() => {
      expect(result.current).toBe(true)
    })

    await waitFor(() => {
      expect(setupAppConfigSpy).toHaveBeenCalled()
    })

    await waitFor(() => {
      expect(result.current).toBe(false)
    })
  })
})

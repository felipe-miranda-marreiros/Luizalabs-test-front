import type { WishesAPI } from '@/entities/Wish'
import { wishService } from '../../Wish/services/wishService'
import { APP_KEY, appService } from './appConfigService'

jest.unmock('./appConfigService')

describe('App Service', () => {
  beforeEach(() => {
    localStorage.clear()
    jest.clearAllMocks()
    jest.resetAllMocks()
  })

  it('Should store custom config in localStorage', () => {
    const config = { shouldFetch: true }
    appService.setupAppConfigOnLocalStorage(config)
    const stored = JSON.parse(localStorage.getItem(APP_KEY) as string)
    expect(stored).toEqual(config)
  })

  it('Should reset config to initial state in localStorage', () => {
    localStorage.setItem(APP_KEY, JSON.stringify({ shouldFetch: true }))
    appService.resetAppConfig()
    const stored = JSON.parse(localStorage.getItem(APP_KEY) as string)
    expect(stored).toEqual({ shouldFetch: false })
  })

  it('Should return initial state if localStorage is empty', () => {
    const config = appService.getAppConfig()
    expect(config).toEqual({ shouldFetch: false })
  })

  it('Should return parsed config from localStorage', () => {
    localStorage.setItem(APP_KEY, JSON.stringify({ shouldFetch: true }))
    const config = appService.getAppConfig()
    expect(config).toEqual({ shouldFetch: true })
  })

  it('Should call wishService and setupListOnLocalStorage on setupAppConfig', async () => {
    const wishes: WishesAPI = { count: 1, items: [1] }
    const setupListSpy = jest.spyOn(wishService, 'setupListOnLocalStorage')
    jest.spyOn(wishService, 'wishes').mockResolvedValueOnce(wishes)

    await appService.setupAppConfig()
    expect(wishService.wishes).toHaveBeenCalled()
    expect(setupListSpy).toHaveBeenCalledWith(wishes)
  })
})

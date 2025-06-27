import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'

afterAll(() => {
  cleanup()
})

jest.mock('react-router', () => {
  const originalModule = jest.requireActual('react-router')

  return {
    ...originalModule,
    useNavigate: () => jest.fn()
  }
})

jest.mock('@/entities/AppConfig/services/appConfigService', () => {
  return {
    appService: {
      setupAppConfig: jest.fn(),
      resetAppConfig: jest.fn(),
      setupAppConfigOnLocalStorage: jest.fn(),
      getAppConfig: jest.fn(() => ({
        shouldFetch: true
      }))
    }
  }
})

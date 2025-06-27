import { wishService } from '../../Wish/services/wishService'

export const APP_KEY = 'APP_LOCAL'

export interface AppConfig {
  shouldFetch: boolean
}

const initialState: AppConfig = {
  shouldFetch: false
}

function setupAppConfigOnLocalStorage(config: AppConfig) {
  localStorage.setItem(APP_KEY, JSON.stringify(config))
}

function resetAppConfig() {
  localStorage.setItem(APP_KEY, JSON.stringify(initialState))
}

function getAppConfig(): AppConfig {
  const localConfig = localStorage.getItem(APP_KEY)
  if (!localConfig) return initialState
  const appConfig: AppConfig = JSON.parse(localConfig)
  return appConfig
}

async function setupAppConfig(): Promise<void> {
  const wishes = await wishService.wishes()
  wishService.setupListOnLocalStorage(wishes)
}

export const appService = {
  setupAppConfig,
  resetAppConfig,
  setupAppConfigOnLocalStorage,
  getAppConfig
}

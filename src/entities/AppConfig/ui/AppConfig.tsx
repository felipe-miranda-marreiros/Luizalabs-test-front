import type { PropsWithChildren } from 'react'
import { useAppConfig } from '../api/useAppConfig'

export function AppConfigSetup({ children }: PropsWithChildren) {
  useAppConfig()

  return children
}

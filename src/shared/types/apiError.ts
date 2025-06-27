import type { AxiosError } from 'axios'

export type ApiError = AxiosError<{
  errors: {
    message: string
  }[]
}>

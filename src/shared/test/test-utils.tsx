import React, { type PropsWithChildren } from 'react'
import {
  render,
  renderHook,
  type RenderHookOptions,
  type RenderOptions
} from '@testing-library/react'
import {
  QueryClient,
  QueryClientProvider,
  type QueryClientConfig
} from '@tanstack/react-query'
import { Toaster } from 'sonner'

function customRender<T = unknown>(
  component: React.ReactElement<T>,
  options?: Omit<RenderOptions, 'wrapper'>
) {
  return render(component, { wrapper: AllProviders(), ...options })
}

function customRenderHook<Result, Props>(
  renderCallback: (props: Props) => Result,
  options?: Omit<RenderHookOptions<Props>, 'wrapper'>
) {
  return renderHook<Result, Props>(renderCallback, {
    wrapper: AllProviders(),
    ...options
  })
}

export const queryClientTestConfig: QueryClientConfig = {
  defaultOptions: {
    queries: {
      retry: false,
      gcTime: Infinity
    },
    mutations: {
      retry: false,
      gcTime: Infinity
    }
  }
}

function AllProviders() {
  const testQueryClient = new QueryClient(queryClientTestConfig)

  return ({ children }: PropsWithChildren) => (
    <QueryClientProvider client={testQueryClient}>
      {children}
      <Toaster />
    </QueryClientProvider>
  )
}

export { customRender as render }
export { customRenderHook as renderHook }

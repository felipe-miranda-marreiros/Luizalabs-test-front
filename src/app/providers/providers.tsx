import { Setup } from '../hooks/setup'
import { Routes } from '../routes/routes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      retry: false
    }
  }
})

export function Providers() {
  return (
    <QueryClientProvider client={queryClient}>
      <Setup>
        <Routes />
      </Setup>
    </QueryClientProvider>
  )
}

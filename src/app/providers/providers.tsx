import { BrowserRouter } from 'react-router'
import { Routes } from '../routes/routes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'sonner'

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
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <Toaster />
    </QueryClientProvider>
  )
}

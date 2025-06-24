import { LoginPage } from '@/pages/Login/ui/LoginPage'
import { createBrowserRouter, RouterProvider } from 'react-router'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />
  }
])

export function Routes() {
  return <RouterProvider router={router} />
}

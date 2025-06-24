import { LoginPage } from '@/pages/Login/ui/LoginPage'
import { SignUpPage } from '@/pages/SignUp'
import { createBrowserRouter, RouterProvider } from 'react-router'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />
  },
  {
    path: '/sign-up',
    element: <SignUpPage />
  }
])

export function Routes() {
  return <RouterProvider router={router} />
}

import { Dashboard } from '@/pages/Dashboard/ui/Dashboard'
import { LoginPage } from '@/pages/Login/ui/LoginPage'
import { ProductsPage } from '@/pages/Products'
import { SignUpPage } from '@/pages/SignUp'
import { createBrowserRouter, RouterProvider } from 'react-router'

const router = createBrowserRouter([
  {
    path: '/',
    Component: LoginPage
  },
  {
    path: '/sign-up',
    Component: SignUpPage
  },
  {
    path: '/dashboard',
    Component: Dashboard,
    children: [
      {
        index: true,
        path: 'products',
        Component: ProductsPage
      },
      {
        index: true,
        path: 'wish-list',
        element: <div>Favoritos</div>
      }
    ]
  }
])

export function Routes() {
  return <RouterProvider router={router} />
}

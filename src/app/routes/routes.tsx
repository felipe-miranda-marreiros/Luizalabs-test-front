import { Dashboard } from '@/pages/Dashboard/ui/Dashboard'
import { LoginPage } from '@/pages/Login/ui/LoginPage'
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
        element: (
          <div>
            <p>Produtos</p>
            <p>Produtos</p>
            <p>Produtos</p>
            <p>Produtos</p>
            <p>Produtos</p>
            <p>Produtos</p>
            <p>Produtos</p>
            <p>Produtos</p>
            <p>Produtos</p>
            <p>Produtos</p>
            <p>Produtos</p>
            <p>Produtos</p>
            <p>Produtos</p>
            <p>Produtos</p>
            <p>Produtos</p>
            <p>Produtos</p>
            <p>Produtos</p>
            <p>Produtos</p>
            <p>Produtos</p>
            <p>Produtos</p>
            <p>Produtos</p>
            <p>Produtos</p>
            <p>Produtos</p>
            <p>Produtos</p>
            <p>Produtos</p>
            <p>Produtos</p>
            <p>Produtos</p>
            <p>Produtos</p>
            <p>Produtos</p>
            <p>Produtos</p>
            <p>Produtos</p>
            <p>Produtos</p>
            <p>Produtos</p>
            <p>Produtos</p>
            <p>Produtos</p>
            <p>Produtos</p>
            <p>Produtos</p>
            <p>Produtos</p>
            <p>Produtos</p>
          </div>
        )
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

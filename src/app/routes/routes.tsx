import { Dashboard } from '@/pages/Dashboard/ui/Dashboard'
import { LoginPage } from '@/pages/Login/ui/LoginPage'
import { ProductsPage } from '@/pages/Products'
import { SignUpPage } from '@/pages/SignUp'
import { Route, Routes as RRoutes } from 'react-router'

export function Routes() {
  return (
    <RRoutes>
      <Route>
        <Route path="/" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index path="products" element={<ProductsPage />} />
          <Route path="wish-list" element={<div>Favoritos</div>} />
        </Route>
      </Route>
    </RRoutes>
  )
}

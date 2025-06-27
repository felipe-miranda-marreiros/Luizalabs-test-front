import { Dashboard } from '@/pages/Dashboard/ui/Dashboard'
import { LoginPage } from '@/pages/Login/ui/LoginPage'
import { ProductsPage } from '@/pages/Products'
import { SignUpPage } from '@/pages/SignUp'
import { WishListPage } from '@/pages/Wishes'
import { Route, Routes as RRoutes } from 'react-router'

export function Routes() {
  return (
    <RRoutes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="products" element={<ProductsPage />} />
        <Route path="wish-list" element={<WishListPage />} />
      </Route>
    </RRoutes>
  )
}

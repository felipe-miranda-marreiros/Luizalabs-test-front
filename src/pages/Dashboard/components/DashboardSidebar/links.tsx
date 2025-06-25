import { FavoriteCount } from '@/features/WishList/ui/FavoriteCount'

interface SidebarLinks {
  link: string
  label: string
  Component?: React.ReactNode
}

export const sidebarLinks: SidebarLinks[] = [
  {
    label: 'Produtos',
    link: '/dashboard/products'
  },
  {
    label: 'Favoritos',
    link: '/dashboard/wish-list',
    Component: <FavoriteCount />
  }
]

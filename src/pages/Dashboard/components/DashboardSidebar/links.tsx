import { FavoriteCount } from '@/entities/Wish/ui/FavoriteCount'
import { PackageSearch, Star } from 'lucide-react'

interface SidebarLinks {
  link: string
  label: string
  Component?: React.ReactNode
}

export const sidebarLinks: SidebarLinks[] = [
  {
    label: 'Produtos',
    link: '/',
    Component: (
      <div>
        <PackageSearch />
      </div>
    )
  },
  {
    label: 'Favoritos',
    link: '/wish-list',
    Component: (
      <div className="relative">
        <div className="absolute right-0 bottom-4">
          <FavoriteCount />
        </div>
        <Star />
      </div>
    )
  }
]

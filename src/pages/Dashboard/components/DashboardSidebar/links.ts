interface SidebarLinks {
  link: string
  label: string
}

export const sidebarLinks: SidebarLinks[] = [
  {
    label: 'Produtos',
    link: '/dashboard/products'
  },
  {
    label: 'Favoritos',
    link: '/dashboard/wish-list'
  }
]

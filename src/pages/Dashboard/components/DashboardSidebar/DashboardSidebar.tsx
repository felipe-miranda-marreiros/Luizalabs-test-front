import { NavLink } from 'react-router'
import { sidebarLinks } from './links'

export function DashboardSidebar() {
  return (
    <aside className="p-4 border-r border-r-gray-50/10">
      <nav>
        <ul className="space-y-5 relative">
          {sidebarLinks.map(({ label, link, Component }) => {
            return (
              <li key={label} className="cursor-pointer text-xl">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? 'text-red-400 underline'
                      : 'decoration-accent-foreground'
                  }
                  to={{
                    pathname: link
                  }}
                >
                  {Component && Component}
                </NavLink>
              </li>
            )
          })}
        </ul>
      </nav>
    </aside>
  )
}

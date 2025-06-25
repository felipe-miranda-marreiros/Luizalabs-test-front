import { NavLink } from 'react-router'
import { sidebarLinks } from './links'

export function DashboardSidebar() {
  return (
    <aside className="p-4 w-[200px] border-r border-r-gray-50/10">
      <nav>
        <ul>
          {sidebarLinks.map(({ label, link, Component }) => {
            return (
              <li key={label} className="flex justify-between text-xl">
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
                  {label}
                </NavLink>
                {Component && Component}
              </li>
            )
          })}
        </ul>
      </nav>
    </aside>
  )
}

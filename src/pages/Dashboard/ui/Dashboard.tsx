import { Outlet } from 'react-router'
import { DashboardHeader } from '../components/DashboardHeader/DashboardHeader'
import { DashboardSidebar } from '../components/DashboardSidebar/DashboardSidebar'
import { AppConfigSetup } from '@/entities/AppConfig'

export function Dashboard() {
  return (
    <AppConfigSetup>
      <main className="flex flex-col overflow-hidden">
        <DashboardHeader />
        <div className="flex h-screen max-h-[calc(100vh_-_80px)]">
          <DashboardSidebar />
          <div className="flex-1 flex-col p-4 overflow-y-auto">
            <Outlet />
          </div>
        </div>
      </main>
    </AppConfigSetup>
  )
}

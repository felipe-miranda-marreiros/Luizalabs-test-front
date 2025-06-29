import { useCurrentUser } from '@/entities/User'
import { Logout } from '@/features/Logout'
import { Link } from 'react-router'

function CurrentUser() {
  const { data } = useCurrentUser()

  if (!data) {
    return (
      <div className="text-right">
        <Link to="/login" className="underline">
          Fazer login
        </Link>
      </div>
    )
  }

  return (
    <div className="flex items-center justify-end gap-3.5">
      <div className="flex items-center gap-4">
        <div className="h-10 w-10 bg-red-500 rounded-full flex items-center justify-center">
          <p>{data?.first_name[0]}</p>
        </div>
        <p>Olá, {data?.first_name.split(' ')[0]}</p>
      </div>
      <div className="justify-self-end">{data && <Logout />}</div>
    </div>
  )
}

export function DashboardHeader() {
  return (
    <div className="p-4 border-b w-full border-b-green-50/10">
      <CurrentUser />
    </div>
  )
}

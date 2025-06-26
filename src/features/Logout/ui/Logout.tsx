import { useLogout } from '../hooks/useLogout'

export function Logout() {
  const { mutate } = useLogout()

  return (
    <button className="cursor-pointer" type="button" onClick={() => mutate()}>
      Sair
    </button>
  )
}

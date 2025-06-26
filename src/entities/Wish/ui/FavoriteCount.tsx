import { useFavoriteCount } from '../hooks/useFavoriteCount'

export function FavoriteCount() {
  const { count } = useFavoriteCount()

  if (count !== undefined && count <= 0) {
    return null
  }

  return (
    <div className="bg-red-600 w-[25px] h-[25px] flex items-center justify-center rounded-full">
      <p className="text-sm">{count}</p>
    </div>
  )
}

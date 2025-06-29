import { useFavoriteCount } from '../hooks/useFavoriteCount'

export function FavoriteCount() {
  const { count } = useFavoriteCount()

  if (count !== undefined && count <= 0) {
    return null
  }

  return (
    <div className="flex items-center justify-center rounded-full">
      <p className="text-[12px] font-bold text-white">{count}</p>
    </div>
  )
}

import { cn } from '@/shared/lib'
import type { ApiError } from '@/shared/types'

interface ErrorProps extends React.ComponentProps<'div'> {
  error: ApiError | null
}

export function Error({ error, className, ...rest }: ErrorProps) {
  if (!error?.response) return null

  return (
    <div className={cn(className)} {...rest}>
      {error.response.data.errors.map((err) => {
        return <p className="text-destructive text-sm">{err.message}</p>
      })}
    </div>
  )
}

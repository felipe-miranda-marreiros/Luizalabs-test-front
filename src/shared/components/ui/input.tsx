import * as React from 'react'

import { cn } from '@/shared/lib/utils'

interface InputIconProps {
  position?: 'left' | 'right'
  icon: React.JSX.Element | undefined
}

function InputIcon({ position, icon }: InputIconProps) {
  if (!icon) return null

  return (
    <div
      className={cn(
        'absolute top-1/2 -translate-y-1/2',
        position === 'left' ? 'left-4' : '',
        position === 'right' ? 'right-4' : ''
      )}
    >
      {icon}
    </div>
  )
}

interface InputProps extends React.ComponentProps<'input'> {
  error?: boolean
  IconRight?: React.JSX.Element
  IconLeft?: React.JSX.Element
}

function Input({ className, IconLeft, IconRight, type, ...props }: InputProps) {
  return (
    <div className="relative">
      <InputIcon icon={IconLeft} position="left" />
      <input
        type={type}
        data-slot="input"
        className={cn(
          'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
          'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
          'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
          className,
          IconLeft && 'placeholder:pl-4 pl-12',
          IconRight && 'placeholder:pr-4 pr-12'
        )}
        {...props}
      />
      <InputIcon icon={IconRight} position="right" />
    </div>
  )
}

export { Input }

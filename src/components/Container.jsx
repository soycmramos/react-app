import { twMerge } from 'tailwind-merge'
import { clsx } from 'clsx'

export default function Container({ className, children, ...props }) {
  return (
    <div className={twMerge(clsx('container mx-auto px-4', className))}
      {...props}
    >
      {children}
    </div>
  )
}
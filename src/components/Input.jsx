import { twMerge } from 'tailwind-merge'
import { clsx } from 'clsx'

export default function Input({ className, ...props }) {
  return (
    <input
      className={twMerge(clsx('block w-full rounded py-1.5 px-2 outline-none border-0 ring-1 ring-inset ring-gray-300 focus:ring-2 dark:bg-transparent dark:ring-gray-300/20', className))}
      {...props}
    />
  )
}
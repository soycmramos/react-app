import { twMerge } from 'tailwind-merge'
import { clsx } from 'clsx'

export default function Button({ className, children, ...props }) {
  return (
    <button
      className={twMerge(clsx('block w-full rounded py-1.5 px-4 outline-none border-0 ring-1 ring-inset ring-gray-300  active:ring-gray-500/10 hover:bg-gray-500/5 active:bg-gray-500/10 dark:bg-transparent dark:ring-gray-300/20 font-semibold transition-all dark:text-dark-text dark:hover:bg-white/5', className))}
      {...props}
    >
      {children}
    </button>
  )
}
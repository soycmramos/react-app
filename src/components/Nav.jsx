import { useState, useEffect } from 'react'
import Button from './Button'

export default function Nav() {

  const defaultTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light' 

  const [theme, setTheme] = useState(defaultTheme)

  useEffect(() => {
    if (theme === 'dark') {
      document.querySelector('html').classList.add('dark')
    } else {
      document.querySelector('html').classList.remove('dark')
    }
  }, [theme])

  const handleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light')

  return (
    <nav>
      <ul className='flex gap-x-4'>
        <li>
          <Button onClick={handleTheme}>
            Theme
          </Button>
        </li>
      </ul>
    </nav>
  )
}
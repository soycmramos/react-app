import Container from './Container'
import Logo from './Logo'
import Nav from './Nav'

export default function Header() {
  return (
    <header className='bg-white py-4 dark:bg-dark-body shadow'>
      <Container>
        <div className='flex justify-between items-center'>
          <Logo />
          <Nav />
        </div>
      </Container>
    </header>
  )
}
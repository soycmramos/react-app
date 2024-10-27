import Container from './components/Container';
import Layout from './layouts/Layout'
import Button from './components/Button'
import Input from './components/Input'

export default function App() {
  return (
    <Layout>
      <Container className='h-full grid items-center p-0'>
        <form className='mx-auto w-full max-w-lg px-4 py-12'>
          <h2 className='text-4xl text-center mb-4 font-semibold'>Sign In</h2>
          <Input
            type='email'
            autoComplete='off'
            placeholder='Email'
            required
            className='mb-2'
          />
          <Input
            type='Password'
            autoComplete='off'
            placeholder='Password'
            required
            className='mb-2'
          />
          <Button
            type='submit'
            className='bg-amber-500 hover:bg-amber-500/90 active:bg-amber-500 ring-amber-500 hover:ring-amber-500/90 text-white dark:bg-amber-500 dark:hover:bg-amber-500/90 dark:active:bg-amber-500 dark:ring-amber-500 dark:hover:ring-amber-500/90 '>
            Sign In
          </Button>
        </form>
      </Container>
    </Layout>
  )
}
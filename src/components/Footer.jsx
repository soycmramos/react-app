import Container from './Container'

export default function Footer() {
  return (
    <footer>
      <Container>
        <div className="flex flex-col items-center py-8">
          <span>{new Date().getFullYear()}</span>
        </div>
      </Container>
    </footer>
  )
}
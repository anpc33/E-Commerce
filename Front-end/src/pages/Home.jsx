import Header from '~/components/Header/Header'
import './home.scss'
import { Container } from '@mui/material'


function Home() {
  return (
    <Container className='home container'>
      <Header />
    </Container>
  )
}

export default Home
import type { NextPage } from 'next'
import { Competencies } from '../components/Competencies'
import { Header } from '../components/Header'
import { Introduction } from '../components/Introduction'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Introduction />
      <Competencies />
    </>
  )
}

export default Home

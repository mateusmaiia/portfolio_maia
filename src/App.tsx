import '../style.css'
import '../dark-theme.js'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/ Header'
import { Main } from './components/Main/Main'

export function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
}

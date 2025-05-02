import {Header} from './components/Header'
import {Bio} from './components/Bio'
import {Servicios} from './components/Servicios'
import {Galeria} from './components/Galeria'
import {Blog} from './components/Blog'
import {Footer} from './components/Footer'
import { Hero } from './components/Hero'
import { HeroSwiper } from './components/HeroSwiper'

export default function App() {
  return (
    <div className="font-sans text-gray-800">
      <HeroSwiper />
      <Header />
      <Bio />
      <Servicios />
      <Galeria />
      <Blog />
      <Footer />
    </div>
  )
}
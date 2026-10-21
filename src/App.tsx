import { useEffect } from 'react'
import { Brand } from './components/Brand'
import { Contact } from './components/Contact'
import { Festival } from './components/Festival'
import { Footer } from './components/Footer'
import { Gallery } from './components/Gallery'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Menu } from './components/Menu'
import { Visit } from './components/Visit'

/** Revela as fotos marcadas com data-revelar quando entram na tela. */
function useRevelar() {
  useEffect(() => {
    const alvos = document.querySelectorAll<HTMLElement>('[data-revelar]')
    if (!('IntersectionObserver' in window)) {
      alvos.forEach((el) => el.classList.add('revelado'))
      return
    }
    const observador = new IntersectionObserver(
      (entradas) => {
        for (const entrada of entradas) {
          if (entrada.isIntersecting) {
            entrada.target.classList.add('revelado')
            observador.unobserve(entrada.target)
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    )
    alvos.forEach((el) => observador.observe(el))
    return () => observador.disconnect()
  }, [])
}

export default function App() {
  useRevelar()

  return (
    <>
      <a className="pular" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Brand />
        <Festival />
        <Menu />
        <Gallery />
        <Visit />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

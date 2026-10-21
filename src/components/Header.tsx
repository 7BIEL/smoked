import { useEffect, useRef, useState } from 'react'
import { site } from '../data/site'
import { ExternalLink } from './ExternalLink'
import { Wordmark } from './Wordmark'
import './Header.css'

const navegacao = [
  { href: '#inicio', rotulo: 'Início' },
  { href: '#experiencia', rotulo: 'Experiência' },
  { href: '#cardapio', rotulo: 'Cardápio' },
  { href: '#localizacao', rotulo: 'Localização' },
]

export function Header() {
  const [solido, setSolido] = useState(false)
  const [aberto, setAberto] = useState(false)
  const botaoRef = useRef<HTMLButtonElement>(null)
  const painelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const aoRolar = () => setSolido(window.scrollY > 24)
    aoRolar()
    window.addEventListener('scroll', aoRolar, { passive: true })
    return () => window.removeEventListener('scroll', aoRolar)
  }, [])

  useEffect(() => {
    if (!aberto) return
    document.body.classList.add('sem-rolagem')
    painelRef.current?.querySelector('a')?.focus()

    const aoTeclar = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setAberto(false)
        botaoRef.current?.focus()
      }
    }
    const aoRedimensionar = () => {
      if (window.matchMedia('(min-width: 60em)').matches) setAberto(false)
    }
    window.addEventListener('keydown', aoTeclar)
    window.addEventListener('resize', aoRedimensionar)
    return () => {
      document.body.classList.remove('sem-rolagem')
      window.removeEventListener('keydown', aoTeclar)
      window.removeEventListener('resize', aoRedimensionar)
    }
  }, [aberto])

  const fechar = () => setAberto(false)

  return (
    <header className="header" data-solido={solido || aberto} data-aberto={aberto}>
      <div className="header__barra">
        <a className="header__marca" href="#inicio" onClick={fechar}>
          <Wordmark />
          <span className="sr-only">, ir para o início</span>
        </a>

        <nav className="header__nav" aria-label="Seções da página">
          <ul>
            {navegacao.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.rotulo}</a>
              </li>
            ))}
          </ul>
        </nav>

        <ExternalLink className="btn btn--brasa header__cta" href={site.links.ifood}>
          Pedir no iFood
        </ExternalLink>

        <button
          ref={botaoRef}
          type="button"
          className="header__alternar"
          aria-expanded={aberto}
          aria-controls="menu-celular"
          onClick={() => setAberto((v) => !v)}
        >
          <span className="sr-only">{aberto ? 'Fechar menu' : 'Abrir menu'}</span>
          <span className="header__barras" aria-hidden="true" />
        </button>
      </div>

      <div id="menu-celular" ref={painelRef} className="menu-celular" inert={!aberto}>
        <nav aria-label="Seções da página (celular)">
          <ul>
            {navegacao.map((item) => (
              <li key={item.href}>
                <a className="display" href={item.href} onClick={fechar}>
                  {item.rotulo}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <ExternalLink className="btn btn--brasa" href={site.links.ifood} onClick={fechar}>
          Pedir no iFood
        </ExternalLink>
      </div>
    </header>
  )
}

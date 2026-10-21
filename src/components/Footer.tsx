import { enderecoLinha1, enderecoLinha2, site } from '../data/site'
import { ExternalLink } from './ExternalLink'
import { Wordmark } from './Wordmark'
import './Footer.css'

const navegacao = [
  { href: '#inicio', rotulo: 'Início' },
  { href: '#experiencia', rotulo: 'Experiência' },
  { href: '#cardapio', rotulo: 'Cardápio' },
  { href: '#localizacao', rotulo: 'Localização' },
]

const ano = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="rodape">
      <div className="container rodape__grade">
        <a className="rodape__marca" href="#inicio">
          <Wordmark />
          <span className="sr-only">, voltar ao início</span>
        </a>

        <nav className="rodape__nav" aria-label="Rodapé">
          <ul>
            {navegacao.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.rotulo}</a>
              </li>
            ))}
          </ul>
        </nav>

        <address className="rodape__endereco">
          {enderecoLinha1}
          <br />
          {enderecoLinha2}
        </address>

        <ul className="rodape__links">
          <li>
            <ExternalLink href={site.links.ifood}>iFood</ExternalLink>
          </li>
          {site.links.instagram && (
            <li>
              <ExternalLink href={site.links.instagram}>Instagram</ExternalLink>
            </li>
          )}
          {site.links.whatsapp && (
            <li>
              <ExternalLink href={site.links.whatsapp}>WhatsApp</ExternalLink>
            </li>
          )}
        </ul>

        <p className="rodape__legal">
          © <span suppressHydrationWarning>{ano}</span> Smoked Burger Piracicaba. Fotos do cardápio da casa no iFood.
        </p>
      </div>
    </footer>
  )
}

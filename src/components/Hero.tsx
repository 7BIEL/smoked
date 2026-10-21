import { site } from '../data/site'
import { ExternalLink } from './ExternalLink'
import { Photo } from './Photo'
import './Hero.css'

export function Hero() {
  return (
    <section id="inicio" className="hero" aria-labelledby="hero-titulo">
      <div className="hero__midia grao">
        <Photo
          foto={{
            arquivo: 'duo-meat',
            alt: 'Duo Meat Defumado: dois hambúrgueres com queijo derretido no pão brioche X',
          }}
          sizes="(min-width: 60em) 60vw, 100vw"
          prioridade
        />
      </div>

      <div className="hero__conteudo">
        <h1 id="hero-titulo" className="hero__titulo">
          <span className="sr-only">Smoked Burger Piracicaba: </span>
          <span className="hero__frase display">
            <span className="hero__linha">
              <span>Seu próximo</span>
            </span>
            <span className="hero__linha">
              <span>burger</span>
            </span>
            <span className="hero__linha">
              <span>favorito.</span>
            </span>
          </span>
        </h1>

        <p className="hero__texto">
          Pão tigre, brioche, caseirinho ou black. Escolha o seu na Smoked Burger, no São Dimas, em
          Piracicaba.
        </p>

        <div className="hero__acoes">
          <a className="btn btn--brasa" href="#cardapio">
            Explorar cardápio
          </a>
          <ExternalLink className="btn btn--linha" href={site.links.comoChegar}>
            Como chegar
          </ExternalLink>
        </div>
      </div>
    </section>
  )
}

import { paes } from '../data/menu'
import { site } from '../data/site'
import { ExternalLink } from './ExternalLink'
import { Photo } from './Photo'
import './Brand.css'

const juntar = (itens: string[]) =>
  itens.length > 1 ? `${itens.slice(0, -1).join(', ')} e ${itens[itens.length - 1]}` : itens[0]

export function Brand() {
  return (
    <section id="experiencia" className="marca" aria-labelledby="marca-titulo">
      <div className="container marca__grade">
        <h2 id="marca-titulo" className="marca__titulo display">
          Mais do que matar a fome.
        </h2>

        <div className="marca__texto">
          <p>
            Na Smoked Burger, cada lanche tem o seu pão. Tem brioche, brioche X, tigre, caseirinho,
            australiano e black com carvão ativado, e na maior parte do cardápio ele chega selado com
            manteiga da roça.
          </p>
          <p>
            Dá para escolher pelo pão, pela carne ou pela fome. O cardápio completo e os pedidos para
            entrega estão no{' '}
            <ExternalLink className="link" href={site.links.ifood}>
              iFood
            </ExternalLink>
            .
          </p>
        </div>

        <figure className="marca__foto" data-revelar>
          <div className="grao">
            <Photo
              foto={{ arquivo: 'pcq', alt: 'Pcq: pão brioche, hambúrguer e queijo derretido' }}
              sizes="(min-width: 48em) 34vw, 100vw"
            />
          </div>
          <figcaption>Pcq: pão, carne Angus de 160 g e queijo.</figcaption>
        </figure>

        <div className="marca__paes">
          <h3 className="marca__paes-titulo">Os pães do cardápio</h3>
          <ul className="paes">
            {paes.map((item) => (
              <li key={item.pao} className="paes__item">
                <span className="paes__nome display">{item.pao}</span>
                <span className="paes__lanches">{juntar(item.lanches)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

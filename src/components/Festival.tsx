import { festival, formatarPreco, miniBurgers, type ItemSimples } from '../data/menu'
import { site } from '../data/site'
import { ExternalLink } from './ExternalLink'
import { Photo } from './Photo'
import './Festival.css'

function Oferta({ item, className }: { item: ItemSimples; className: string }) {
  return (
    <article className={`oferta ${className}`}>
      {item.foto && (
        <div className="oferta__midia grao" data-revelar>
          <Photo foto={item.foto} sizes="(min-width: 48em) 42vw, 100vw" />
        </div>
      )}
      <div className="oferta__corpo">
        <h3 className="oferta__nome display">{item.nome}</h3>
        <p className="oferta__descricao">{item.descricao}</p>
        {item.preco !== undefined && <p className="oferta__preco">{formatarPreco(item.preco)}</p>}
      </div>
    </article>
  )
}

export function Festival() {
  return (
    <section className="festival" aria-labelledby="festival-titulo">
      <div className="container festival__grade">
        <div className="festival__cabeca">
          <h2 id="festival-titulo" className="festival__titulo display">
            Um sabor puxa o próximo.
          </h2>
          <div className="festival__texto">
            <p>
              Três mini burgers na mesma caixa, para provar mais de um lanche da casa de uma vez. E o
              Festival Smoked Burger também sai para entrega.
            </p>
            {site.rodizio && <p>{site.rodizio}</p>}
            <ExternalLink className="btn btn--brasa" href={site.links.ifood}>
              Pedir mini burgers no iFood
            </ExternalLink>
          </div>
        </div>

        <Oferta item={miniBurgers} className="oferta--primeira" />
        <Oferta item={festival} className="oferta--segunda" />
      </div>
    </section>
  )
}

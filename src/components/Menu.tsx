import { acompanhamentos, formatarPreco, lanches, smokedBurger } from '../data/menu'
import { site } from '../data/site'
import { ExternalLink } from './ExternalLink'
import { Photo } from './Photo'
import './Menu.css'

/** Formato de cada foto na grade editorial, na ordem de `lanches`. */
const formatos = ['largo', 'alto', 'quadrado', 'quadrado', 'quadrado', 'alto', 'largo'] as const

const tamanhos: Record<(typeof formatos)[number], string> = {
  largo: '(min-width: 48em) 56vw, 100vw',
  alto: '(min-width: 48em) 40vw, 100vw',
  quadrado: '(min-width: 48em) 32vw, (min-width: 40em) 50vw, 100vw',
}

export function Menu() {
  return (
    <section id="cardapio" className="cardapio" aria-labelledby="cardapio-titulo">
      <div className="container">
        <header className="cardapio__cabeca">
          <h2 id="cardapio-titulo" className="cardapio__titulo display">
            Escolha pelo pão.
          </h2>
          <p className="cardapio__intro">
            Os lanches da casa com os preços do iFood. Na maioria deles, o pão vai selado com manteiga
            da roça.
          </p>
        </header>

        <ul className="pratos">
          {lanches.map((lanche, i) => {
            const formato = formatos[i] ?? 'quadrado'
            return (
              <li key={lanche.id} className={`prato prato--${formato}`}>
                <div className="prato__midia grao" data-revelar>
                  <Photo foto={lanche.foto} sizes={tamanhos[formato]} />
                </div>
                <div className="prato__corpo">
                  <div className="prato__topo">
                    <h3 className="prato__nome display">{lanche.nome}</h3>
                    <p className="prato__preco">{formatarPreco(lanche.preco)}</p>
                  </div>
                  <p className="prato__pao">{lanche.pao}</p>
                  {lanche.detalhe && <p className="prato__detalhe">{lanche.detalhe}</p>}
                  <ExternalLink
                    className="prato__pedir link"
                    href={site.links.ifood}
                    aria-label={`Pedir ${lanche.nome} no iFood`}
                  >
                    Pedir no iFood
                  </ExternalLink>
                </div>
              </li>
            )
          })}
        </ul>

        <p className="cardapio__extra">
          <span className="cardapio__extra-nome display">{smokedBurger.nome}</span>
          <span>
            O lanche que leva o nome da casa vem no {smokedBurger.pao.toLowerCase()}. Preço e
            ingredientes no{' '}
            <ExternalLink className="link" href={site.links.ifood}>
              iFood
            </ExternalLink>
            .
          </span>
        </p>

        <div className="quadro">
          <h3 className="quadro__titulo display">Combos, porções e kids</h3>
          <ul className="quadro__lista">
            {acompanhamentos.map((item) => (
              <li key={item.id} className="quadro__item">
                <span className="quadro__nome">{item.nome}</span>
                <span className="quadro__pontos" aria-hidden="true" />
                {item.preco !== undefined && (
                  <span className="quadro__preco">
                    {item.aPartirDe && <span className="quadro__a-partir">a partir de </span>}
                    {formatarPreco(item.preco)}
                  </span>
                )}
                <span className="quadro__descricao">{item.descricao}</span>
              </li>
            ))}
          </ul>
        </div>

        <footer className="cardapio__rodape">
          <p className="cardapio__nota">
            Preços conferidos no iFood em {site.precosConferidosEm}, sujeitos a alteração. Bebidas e o
            cardápio completo estão no app.
          </p>
          <ExternalLink className="btn btn--tinta" href={site.links.ifood}>
            Ver cardápio completo no iFood
          </ExternalLink>
        </footer>
      </div>
    </section>
  )
}

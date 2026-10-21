import { Photo } from './Photo'
import './Gallery.css'

type Quadro = {
  arquivo: string
  alt: string
  legenda: string
  sizes: string
  largura: number
  altura: number
  larguras: number[]
}

/** Recortes das fotos do cardápio (gerados por scripts/preparar-imagens.py). */
const quadros: Quadro[] = [
  {
    arquivo: 'galeria-combo',
    alt: 'Lanche, batata e refrigerante sobre a mesa, com luz neon ao fundo',
    legenda: 'Combo lanche, batata e refrigerante',
    sizes: '(min-width: 48em) 58vw, 100vw',
    largura: 1072,
    altura: 804,
    larguras: [640, 1072],
  },
  {
    arquivo: 'galeria-onion-rings',
    alt: 'Anéis de cebola empanados empilhados na cesta de metal',
    legenda: 'Onion Rings 500 g',
    sizes: '(min-width: 48em) 40vw, 50vw',
    largura: 804,
    altura: 1072,
    larguras: [480, 804],
  },
  {
    arquivo: 'galeria-mexicano',
    alt: 'Detalhe do pão tigre do Mexicano, com bacon e nachos',
    legenda: 'O pão tigre do Mexicano',
    sizes: '(min-width: 48em) 30vw, 50vw',
    largura: 750,
    altura: 836,
    larguras: [480, 750],
  },
  {
    arquivo: 'galeria-batata',
    alt: 'Batata frita ondulada na cesta de metal',
    legenda: 'Batata frita 500 g',
    sizes: '(min-width: 48em) 28vw, 50vw',
    largura: 1072,
    altura: 1072,
    larguras: [480, 1072],
  },
  {
    arquivo: 'galeria-kids',
    alt: 'Caixa Smoked Kids com mini lanche, batata, suco e ovo de chocolate',
    legenda: 'Smoked Kids',
    sizes: '(min-width: 48em) 40vw, 100vw',
    largura: 1072,
    altura: 804,
    larguras: [640, 1072],
  },
]

export function Gallery() {
  return (
    <section className="galeria" aria-labelledby="galeria-titulo">
      <div className="container">
        <h2 id="galeria-titulo" className="galeria__titulo display">
          De perto.
        </h2>
        <ul className="galeria__mosaico">
          {quadros.map((q, i) => (
            <li key={q.arquivo} className={`galeria__quadro galeria__quadro--${i + 1}`}>
              <figure>
                <div className="galeria__foto grao" data-revelar>
                  <Photo
                    foto={{ arquivo: q.arquivo, alt: q.alt }}
                    sizes={q.sizes}
                    largura={q.largura}
                    altura={q.altura}
                    larguras={q.larguras}
                  />
                </div>
                <figcaption>{q.legenda}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

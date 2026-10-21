import type { Foto } from '../data/menu'

const base = import.meta.env.BASE_URL
const LARGURAS_PADRAO = [480, 768, 1072]

type Props = {
  foto: Foto
  /** Atributo sizes do srcset: quanto da tela a imagem ocupa em cada breakpoint. */
  sizes: string
  /** Dimensões intrínsecas do maior arquivo (evitam salto de layout). */
  largura?: number
  altura?: number
  larguras?: number[]
  prioridade?: boolean
  className?: string
}

export function Photo({
  foto,
  sizes,
  largura = 1072,
  altura = 1072,
  larguras = LARGURAS_PADRAO,
  prioridade = false,
  className,
}: Props) {
  const url = (w: number) => `${base}img/${foto.arquivo}-${w}.webp`
  const padrao = larguras.includes(768) ? 768 : larguras[larguras.length - 1]

  return (
    <img
      className={className}
      src={url(padrao)}
      srcSet={larguras.map((w) => `${url(w)} ${w}w`).join(', ')}
      sizes={sizes}
      width={largura}
      height={altura}
      alt={foto.alt}
      loading={prioridade ? 'eager' : 'lazy'}
      decoding={prioridade ? 'sync' : 'async'}
      fetchPriority={prioridade ? 'high' : 'auto'}
    />
  )
}

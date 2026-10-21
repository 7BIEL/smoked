import type { AnchorHTMLAttributes, ReactNode } from 'react'

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; children: ReactNode }

/** Link para fora do site: abre em nova aba e avisa leitores de tela. */
export function ExternalLink({ children, ...props }: Props) {
  return (
    <a target="_blank" rel="noopener noreferrer" {...props}>
      {children}
      <span className="sr-only"> (abre em nova aba)</span>
    </a>
  )
}

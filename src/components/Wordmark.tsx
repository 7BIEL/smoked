/**
 * Assinatura tipográfica provisória.
 * PENDENTE: substituir pelo logotipo oficial (SVG) quando a casa enviar o arquivo.
 */
export function Wordmark({ className = '' }: { className?: string }) {
  return (
    <span className={`wordmark ${className}`}>
      <span className="wordmark__nome">Smoked Burger</span>
      <span className="wordmark__cidade">Piracicaba</span>
    </span>
  )
}

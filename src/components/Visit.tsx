import { enderecoLinha1, enderecoLinha2, site } from '../data/site'
import { ExternalLink } from './ExternalLink'
import './Visit.css'

export function Visit() {
  return (
    <section id="localizacao" className="visita" aria-labelledby="visita-titulo">
      <div className="container visita__grade">
        <h2 id="visita-titulo" className="visita__titulo display">
          Seu próximo encontro com um bom burger começa aqui.
        </h2>

        <address className="visita__endereco">
          <span className="display">{enderecoLinha1}</span>
          <span>{enderecoLinha2}</span>
        </address>

        <div className="visita__acoes">
          <ExternalLink className="btn btn--tinta" href={site.links.comoChegar}>
            Como chegar
          </ExternalLink>
          <ExternalLink className="btn btn--linha-tinta" href={site.links.ifood}>
            Pedir no iFood
          </ExternalLink>
        </div>

        <p className="visita__nota">
          {site.horarios
            ? site.horarios.map((h) => `${h.dias}, das ${h.abre} às ${h.fecha}`).join('. ') + '.'
            : 'Antes de sair, confira no Google Maps se a casa está aberta.'}
        </p>
      </div>
    </section>
  )
}

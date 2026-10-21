import { useState } from 'react'
import { enderecoLinha1, enderecoLinha2, site } from '../data/site'
import { ExternalLink } from './ExternalLink'
import './Contact.css'

/** O mapa do Google só carrega quando a pessoa pede: a página fica leve no celular. */
function Mapa() {
  const [carregar, setCarregar] = useState(false)

  return (
    <div className="mapa">
      {carregar ? (
        <iframe
          className="mapa__frame"
          title={`Mapa: ${enderecoLinha1}, ${enderecoLinha2}`}
          src={site.links.mapaEmbed}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        <div className="mapa__capa">
          <p className="mapa__rua display">Av. Carlos Botelho</p>
          <p className="mapa__bairro">São Dimas, Piracicaba</p>
          <button type="button" className="btn btn--linha" onClick={() => setCarregar(true)}>
            Mostrar mapa aqui
          </button>
        </div>
      )}
    </div>
  )
}

export function Contact() {
  return (
    <section className="contato" aria-labelledby="contato-titulo">
      <div className="container contato__grade">
        <h2 id="contato-titulo" className="contato__titulo display">
          Localização e contato
        </h2>

        <dl className="contato__lista">
          <div>
            <dt>Endereço</dt>
            <dd>
              <address>
                {enderecoLinha1}
                <br />
                {enderecoLinha2}
                {site.endereco.cep && (
                  <>
                    <br />
                    CEP {site.endereco.cep}
                  </>
                )}
              </address>
              <ExternalLink className="link" href={site.links.mapa}>
                Abrir no Google Maps
              </ExternalLink>
            </dd>
          </div>

          <div>
            <dt>Pedidos para entrega</dt>
            <dd>
              <ExternalLink className="link" href={site.links.ifood}>
                Smoked Burger Piracicaba no iFood
              </ExternalLink>
            </dd>
          </div>

          {site.links.whatsapp && (
            <div>
              <dt>WhatsApp</dt>
              <dd>
                <ExternalLink className="link" href={site.links.whatsapp}>
                  Conversar pelo WhatsApp
                </ExternalLink>
              </dd>
            </div>
          )}

          {site.links.instagram && (
            <div>
              <dt>Instagram</dt>
              <dd>
                <ExternalLink className="link" href={site.links.instagram}>
                  Ver perfil no Instagram
                </ExternalLink>
              </dd>
            </div>
          )}

          <div>
            <dt>Horário</dt>
            <dd>
              {site.horarios ? (
                <ul>
                  {site.horarios.map((h) => (
                    <li key={h.dias}>
                      {h.dias}: {h.abre} às {h.fecha}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>
                  Veja o horário do dia no{' '}
                  <ExternalLink className="link" href={site.links.mapa}>
                    Google Maps
                  </ExternalLink>
                  .
                </p>
              )}
            </dd>
          </div>
        </dl>

        <Mapa />
      </div>
    </section>
  )
}

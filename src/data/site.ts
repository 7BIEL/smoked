/**
 * Informações da Smoked Burger Piracicaba.
 *
 * Tudo que está preenchido aqui foi confirmado em fonte verificável:
 * - Endereço: informado no briefing e coerente com a loja no iFood (bairro São Dimas).
 * - Link do iFood: página oficial da loja no iFood.
 *
 * Campos opcionais (instagram, whatsapp, horarios, rodizio, cep) ficam vazios
 * até o proprietário confirmar. Enquanto estiverem vazios, NÃO aparecem na página.
 * Valores encontrados em fontes não oficiais estão nos comentários "PENDENTE".
 */

export type Horario = { dias: string; abre: string; fecha: string }

type Site = {
  nome: string
  cidade: string
  endereco: {
    rua: string
    numero: string
    bairro: string
    cidade: string
    uf: string
    /** PENDENTE: 13416-145 aparece em registro de empresa no mesmo endereço. Confirmar. */
    cep?: string
  }
  links: {
    ifood: string
    comoChegar: string
    mapa: string
    mapaEmbed: string
    /** PENDENTE: @smokedburgerpiracicaba aparece só em fonte não oficial. Confirmar o perfil. */
    instagram?: string
    /** PENDENTE: (19) 99948-0598 aparece em fonte não oficial. Confirmar se é WhatsApp de pedidos. */
    whatsapp?: string
  }
  /** PENDENTE: fontes divergem (18h–23h30, 17h30–23h30, abertura 17h45). Confirmar com a casa. */
  horarios?: Horario[]
  /**
   * PENDENTE: há relatos de rodízio de mini burgers no salão, mas sem confirmação oficial
   * de preço, dias ou regras. Quando confirmado, descreva aqui em uma ou duas frases.
   */
  rodizio?: string
  /** Mês em que os preços do cardápio foram conferidos no iFood. */
  precosConferidosEm: string
}

const enderecoTexto = 'Avenida Carlos Botelho, 852 - São Dimas, Piracicaba - SP'
const enderecoUrl = encodeURIComponent(enderecoTexto)

export const site: Site = {
  nome: 'Smoked Burger',
  cidade: 'Piracicaba',
  endereco: {
    rua: 'Avenida Carlos Botelho',
    numero: '852',
    bairro: 'São Dimas',
    cidade: 'Piracicaba',
    uf: 'SP',
  },
  links: {
    ifood:
      'https://www.ifood.com.br/delivery/piracicaba-sp/smoked-burger-piracicaba-sao-dimas/45ef6495-fe91-4c11-8b4a-9b3bca9dad78',
    comoChegar: `https://www.google.com/maps/dir/?api=1&destination=${enderecoUrl}`,
    mapa: `https://www.google.com/maps/search/?api=1&query=${enderecoUrl}`,
    mapaEmbed: `https://www.google.com/maps?q=${enderecoUrl}&output=embed`,
  },
  precosConferidosEm: 'outubro de 2026',
}

export const enderecoLinha1 = `${site.endereco.rua}, ${site.endereco.numero}`
export const enderecoLinha2 = `${site.endereco.bairro}, ${site.endereco.cidade} - ${site.endereco.uf}`

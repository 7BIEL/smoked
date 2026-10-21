/**
 * Cardápio da Smoked Burger Piracicaba, conferido no iFood (veja site.precosConferidosEm).
 *
 * Regra: só entra aqui o que aparece no cardápio oficial. As descrições usam apenas
 * o trecho visível no iFood (o restante dos ingredientes fica para o app).
 * Fotos: imagens do próprio cardápio no iFood (public/img). Substituir pelos originais
 * em alta resolução assim que a casa enviar.
 */

export type Foto = {
  /** Nome base do arquivo em public/img (ex.: "mexicano" -> mexicano-720.webp). */
  arquivo: string
  alt: string
}

export type Lanche = {
  id: string
  nome: string
  pao: string
  detalhe?: string
  preco: number
  foto: Foto
}

export type ItemSimples = {
  id: string
  nome: string
  descricao: string
  preco?: number
  aPartirDe?: boolean
  foto?: Foto
}

export const lanches: Lanche[] = [
  {
    id: 'mexicano',
    nome: 'Mexicano',
    pao: 'Pão tigre',
    preco: 39.99,
    foto: { arquivo: 'mexicano', alt: 'Lanche Mexicano no pão tigre, visto de perto' },
  },
  {
    id: 'duo-meat',
    nome: 'Duo Meat Defumado',
    pao: 'Pão brioche X',
    detalhe: 'Com dois hambúrgueres.',
    preco: 49.99,
    foto: { arquivo: 'duo-meat', alt: 'Duo Meat Defumado com dois hambúrgueres e queijo derretido' },
  },
  {
    id: 'tres-onions',
    nome: 'Três Onions',
    pao: 'Pão brioche X',
    preco: 39.99,
    foto: { arquivo: 'tres-onions', alt: 'Lanche Três Onions com anéis de cebola empanados' },
  },
  {
    id: 'churras-salad',
    nome: 'Churras Salad',
    pao: 'Pão tigre',
    preco: 39.99,
    foto: { arquivo: 'churras-salad', alt: 'Churras Salad com alface, tomate e cebola roxa' },
  },
  {
    id: 'italianinho',
    nome: 'Italianinho',
    pao: 'Pão caseirinho',
    preco: 39.99,
    foto: { arquivo: 'italianinho', alt: 'Italianinho no pão caseirinho com queijo derretido' },
  },
  {
    id: 'cheddar-bacon',
    nome: 'Cheddar Bacon',
    pao: 'Pão australiano',
    preco: 39.99,
    foto: { arquivo: 'cheddar-bacon', alt: 'Cheddar Bacon no pão australiano com bacon e cheddar' },
  },
  {
    id: 'pcq',
    nome: 'Pcq',
    pao: 'Pão brioche',
    detalhe: 'Pão, carne e queijo, com hambúrguer de carne Angus de 160 g.',
    preco: 29.99,
    foto: { arquivo: 'pcq', alt: 'Pcq: pão brioche, hambúrguer e queijo' },
  },
]

/** Lanche da casa sem foto completa nem preço visível no material recebido. */
export const smokedBurger = {
  nome: 'Smoked Burger',
  pao: 'Pão black com carvão ativado',
}

export const miniBurgers: ItemSimples = {
  id: 'mini-burgers',
  nome: 'Mini Burgers',
  descricao: 'São três mini burgers.',
  preco: 39.9,
  foto: { arquivo: 'mini-burgers', alt: 'Três mini burgers lado a lado na caixa da Smoked Burger' },
}

export const festival: ItemSimples = {
  id: 'festival',
  nome: 'Festival de Mini Burgers',
  descricao: 'O Festival Smoked Burger, agora na sua casa.',
  preco: 129.99,
  foto: {
    arquivo: 'festival',
    alt: 'Festival de Mini Burgers: mini burgers na caixa, com refrigerante e luz neon ao fundo',
  },
}

export const acompanhamentos: ItemSimples[] = [
  {
    id: 'combo',
    nome: 'Combo lanche + batata + refrigerante',
    descricao: 'Escolha seu lanche e turbine com batata frita e refrigerante.',
    preco: 46,
    aPartirDe: true,
  },
  {
    id: 'batata-500',
    nome: 'Batata frita 500 g',
    descricao: 'Batatas palito fritas em óleo de algodão.',
    preco: 35,
  },
  {
    id: 'onion-rings',
    nome: 'Onion Rings 500 g',
    descricao: 'Anéis de cebola empanados e fritos.',
    preco: 35,
  },
  {
    id: 'batata-120',
    nome: 'Batata frita 120 g',
    descricao: 'Batatas palito fritas em óleo de algodão.',
    preco: 9.99,
  },
  {
    id: 'smoked-kids',
    nome: 'Smoked Kids',
    descricao: 'Uma caixinha cheia de atividades para as crianças.',
    preco: 34.99,
  },
]

/** Pães do cardápio e os lanches que usam cada um. */
export const paes: { pao: string; lanches: string[] }[] = [
  { pao: 'Brioche', lanches: ['Pcq'] },
  { pao: 'Brioche X', lanches: ['Três Onions', 'Duo Meat Defumado'] },
  { pao: 'Tigre', lanches: ['Churras Salad', 'Mexicano'] },
  { pao: 'Caseirinho', lanches: ['Italianinho'] },
  { pao: 'Australiano', lanches: ['Cheddar Bacon'] },
  { pao: 'Black', lanches: ['Smoked Burger'] },
]

const brl = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
export const formatarPreco = (valor: number) => brl.format(valor)

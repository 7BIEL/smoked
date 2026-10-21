# Smoked Burger Piracicaba — landing page

Landing page de página única para a Smoked Burger (Avenida Carlos Botelho, 852, São Dimas, Piracicaba - SP).
Feita em React + TypeScript + Vite, sem backend.

## Rodar

```bash
npm install
npm run dev       # desenvolvimento em http://localhost:5173
npm run build     # gera a versão de produção em dist/
npm run preview   # serve o dist/ em http://localhost:4173
```

O `dist/` é estático: dá para publicar em qualquer hospedagem (Netlify, Vercel, servidor próprio).
Para publicar em um subcaminho, defina `BASE_PATH` no build (ex.: `BASE_PATH=/smoked/ npm run build`).

### Netlify

O `netlify.toml` já traz o comando de build (`npm run build`), a pasta publicada (`dist`), o Node 22
e o cache dos arquivos. Em app.netlify.com: **Add new project → Import an existing project → GitHub →
`smoked`** e confirme o deploy. Cada push na `main` publica de novo.

### GitHub Pages

O workflow `.github/workflows/pages.yml` roda a cada push na `main`: faz o build com
`BASE_PATH=/<repositório>/` e publica o `dist/` na branch `gh-pages`.

Configuração única no GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch →
Branch: `gh-pages` / `(root)` → Save**. O site fica em `https://<usuário>.github.io/<repositório>/`.

## Onde editar

| O quê | Arquivo |
| --- | --- |
| Endereço, links (iFood, mapas), Instagram, WhatsApp, horários, rodízio | `src/data/site.ts` |
| Lanches, preços, porções, pães | `src/data/menu.ts` |
| Textos de cada seção | `src/components/*.tsx` |
| Cores, fontes e espaçamentos | `src/styles/global.css` (tokens no `:root`) |
| Título, descrição, Open Graph e dados estruturados | `index.html` |

Campos opcionais em `site.ts` (`instagram`, `whatsapp`, `horarios`, `rodizio`, `cep`) não aparecem
na página enquanto estiverem vazios. Ao preenchê-los, os blocos de contato, rodapé e visita passam a mostrá-los.

## Seções

1. Header fixo com navegação por âncoras, botão "Pedir no iFood" e menu de celular
2. Hero — "Seu próximo burger favorito."
3. Marca — "Mais do que matar a fome." e os pães do cardápio
4. Mini burgers e Festival Smoked Burger — "Um sabor puxa o próximo."
5. Cardápio — "Escolha pelo pão.", com preços do iFood
6. Galeria — "De perto."
7. Convite à visita, com "Como chegar"
8. Localização e contato, com mapa que só carrega quando a pessoa pede
9. Rodapé

## Informações confirmadas

- Nome e endereço, coerentes com a loja no iFood (bairro São Dimas).
- Link da loja no iFood.
- Lanches, porções, combos e preços: cardápio do iFood (capturas de tela enviadas pelo cliente em outubro de 2026).
  As descrições usam apenas o trecho visível no app.
- Fotos: as próprias fotos do cardápio no iFood.

## Pendente de confirmação com a casa

Nada disto aparece no site até ser confirmado:

- **Logotipo oficial** (SVG). Hoje o header e o rodapé usam uma assinatura tipográfica e o favicon é um monograma provisório.
- **Fotos em alta resolução.** As atuais vêm das capturas do iFood (~270 px), recortadas e ampliadas com
  super-resolução. Com os originais, basta rodar `scripts/preparar-imagens.py` (veja o cabeçalho do script).
- **Instagram**: `@smokedburgerpiracicaba` aparece só em fonte não oficial.
- **WhatsApp/telefone**: (19) 99948-0598 aparece em fonte não oficial; outro diretório lista um número diferente.
- **Horário de funcionamento**: as fontes divergem (18h–23h30, 17h30–23h30, abertura às 17h45 no iFood).
- **Rodízio de mini burgers no salão**: há relatos em redes sociais, sem preço, dias ou regras oficiais.
  O site fala só do Festival de Mini Burgers que está no iFood.
- **Ingredientes completos** de cada lanche e o preço do Smoked Burger (pão black com carvão ativado).
- **CEP** (13416-145 aparece em registro de empresa no mesmo endereço).
- **Domínio definitivo**, para URL canônica, `og:url` e `og:image` absolutos.

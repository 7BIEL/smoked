// Injeta o HTML renderizado no dist/index.html: a página aparece antes do JS carregar
// e os buscadores leem o conteúdo direto.
import { readFile, rm, writeFile } from 'node:fs/promises'
import { fileURLToPath, pathToFileURL } from 'node:url'

const raiz = fileURLToPath(new URL('..', import.meta.url))
const { render } = await import(pathToFileURL(`${raiz}dist-ssr/entry-server.js`).href)

const caminho = `${raiz}dist/index.html`
const html = await readFile(caminho, 'utf8')
const marcador = '<div id="root"></div>'
if (!html.includes(marcador)) throw new Error('Não achei <div id="root"></div> em dist/index.html')

await writeFile(caminho, html.replace(marcador, `<div id="root">${render()}</div>`))
await rm(`${raiz}dist-ssr`, { recursive: true, force: true })
console.log('Pré-renderização concluída: dist/index.html')

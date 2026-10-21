import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import '@fontsource-variable/big-shoulders-display'
import '@fontsource-variable/archivo'
import './styles/global.css'
import App from './App'

const raiz = document.getElementById('root')!
const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

// No build a página já vem pré-renderizada; no dev, renderiza do zero.
if (raiz.hasChildNodes()) hydrateRoot(raiz, app)
else createRoot(raiz).render(app)

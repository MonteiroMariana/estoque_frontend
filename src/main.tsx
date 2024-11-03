import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { ProductProvider } from './shared/contexts/ProductContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)

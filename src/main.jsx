import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Paragrafo from './paragrafo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Paragrafo />
    <App />
  </StrictMode>,      
)

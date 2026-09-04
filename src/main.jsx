import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './tema.css'
import AppTarefas from './pages/Tarefas/AppTarefas.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <AppTarefas /> */}
    <App />
  </StrictMode>,      
)

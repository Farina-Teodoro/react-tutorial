import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Paragrafo from './Paragrafo.jsx'
import CaixaTexto from './CaixaTexto.jsx'
import { ThemeProvider } from './contexts/ThemeContexts.jsx'
import {ThemeToggleButton} from './components/ThemeToggleButton.jsx'

function App() {
  const [num] = useState(1)

  return (
    <ThemeProvider>
      <div>
        <nav>Menu de navegação</nav>
        <ThemeToggleButton/>
      </div>
    </ThemeProvider>
  )
}

export default App;

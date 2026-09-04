import './App.css'
import { ThemeProvider } from './contexts/ThemeContexts.jsx'
import {ThemeToggleButton} from './components/ThemeToggleButton.jsx'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Sobre from './pages/Sobre.jsx'
import AppTarefas from './pages/Tarefas/AppTarefas.jsx'

function App() {

  return (
    <ThemeProvider>
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/tarefas">Tarefas</Link></li>
              <li><Link to="/sobre">Sobre</Link></li>
            </ul>
          </nav>
          <ThemeToggleButton/>
        </div>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tarefas" element={<AppTarefas />} />
            <Route path="/sobre" element={<Sobre />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App;

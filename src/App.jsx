import './App.css'
import { ThemeProvider } from './contexts/ThemeContexts.jsx'
import {ThemeToggleButton} from './components/ThemeToggleButton.jsx'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Sobre from './pages/Sobre.jsx'
import AppTarefas from './pages/Tarefas/AppTarefas.jsx'
import Usuarios from './pages/Usuarios.jsx'

function App() {

  return (
    <ThemeProvider>
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/tarefas">Tarefas</Link></li>
              <li><Link to="/usuarios">Usuários</Link></li>
              <li><Link to="/sobre">Sobre</Link></li>
            </ul>
          </nav>
          <ThemeToggleButton/>
        </div>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tarefas" element={<AppTarefas />} />
            <Route path="/usuarios" element={<Usuarios />} />
            <Route path="/sobre" element={<Sobre />} />

            <Route path="/usuarios/:id" element={<Usuarios />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App;

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Paragrafo from './Paragrafo.jsx'
import CaixaTexto from './CaixaTexto.jsx'

function App() {
  const [num] = useState(1)

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Number is {num}
          </p>
        </div>
        <Paragrafo nome="Theomajs" />
        <Paragrafo nome="Jpinto" />
        <CaixaTexto/>
      </section>

      <div className="ticks"></div>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App

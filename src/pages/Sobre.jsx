import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContexts';

const Sobre = () => {
    const { theme } = useContext(ThemeContext);
    return (
    <div className={theme}>
      <h2>Sobre</h2>
      <p>Info.</p>
    </div>
  )
}

export default Sobre;
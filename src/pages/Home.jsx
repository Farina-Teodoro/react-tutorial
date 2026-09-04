import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContexts';

const Home = () => {

  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme}>
      <h2>Página Inicial</h2>
      <p>Bem-vindos!</p>
    </div>
  )
}

export default Home;
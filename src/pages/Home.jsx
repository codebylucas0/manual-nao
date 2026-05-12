import nao from '../assets/nao.png'

import { useNavigate } from 'react-router-dom'

import { Moon, Sun } from 'lucide-react'

function Home({ darkMode, setDarkMode }) {

  const navigate = useNavigate()

  return (
    <div className={darkMode ? 'app dark' : 'app'}>

      <header className="navbar">

        <div className="logo">
          <img src={nao} alt="NAO" />
          <span>Conheça o NAO</span>
        </div>

        <button
          className="theme-button"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>

      </header>

      <main className="hero">

        <h1>Conheça o NAO</h1>

        <p>
          Seu guia interativo e amigável para aprender
          sobre o robô educacional NAO.
        </p>

        <div
          className="card"

          onMouseMove={(e) => {
            const card = e.currentTarget

            const rect = card.getBoundingClientRect()

            const x = e.clientX - rect.left
            const y = e.clientY - rect.top

            card.style.setProperty('--x', `${x}px`)
            card.style.setProperty('--y', `${y}px`)
            card.style.setProperty('--opacity', '1')
          }}

          onMouseLeave={(e) => {
            e.currentTarget.style.setProperty('--opacity', '0')
          }}
        >

          <img
            src={nao}
            alt="NAO"
            className="robot"
          />

          <button
            onClick={() => navigate('/dashboard')}
          >
            Quero conhecê-lo!
          </button>

          <button
            className="secondary"
            onClick={() => navigate('/projeto')}
          >
            Conhecer o projeto
          </button>

        </div>

      </main>

    </div>
  )
}

export default Home
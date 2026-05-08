import {
  Moon,
  Sun,
  ChevronDown,
  User
} from 'lucide-react'

import { useState } from 'react'

function Dashboard({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (

    <div className={darkMode ? 'dashboard dark' : 'dashboard'}>

      <aside className="sidebar">

        <div className="sidebar-logo">
          <h2>NAO</h2>
          <span>Manual do Robô</span>
        </div>

        <nav>

          <a href="#">
            Início
          </a>

          <a href="#">
            Módulo 1
          </a>

          <a href="#">
            Módulo 2
          </a>

          <a href="#">
            Módulo 3
          </a>

          <a href="#">
            Módulo 4
          </a>

          <a href="#">
            Módulo 5
          </a>

          <a href="#">
            Módulo 6
          </a>

        </nav>

      </aside>


      <main className="main-content">

        <header className="topbar">

          <div className="profile-menu">

            <div
              className="profile-trigger"
              onClick={() => setMenuOpen(!menuOpen)}
            >



              <User size={18} />

              <ChevronDown size={18} />

            </div>

            {menuOpen && (
              <div className="profile-dropdown">

                <div className="dropdown-user">

                  <strong>Explorador NAO</strong>

                  <span>Iniciante</span>

                </div>

                <button
                  onClick={() => setDarkMode(!darkMode)}
                >
                  {darkMode
                    ? <Sun size={18} />
                    : <Moon size={18} />
                  }

                  {darkMode
                    ? 'Modo claro'
                    : 'Modo escuro'
                  }

                </button>

                <button>
                  Perfil
                </button>

                <button>
                  Configurações
                </button>

              </div>
            )}

          </div>

        </header>

        <h1>
          Bem-vindo ao Manual do NAO
        </h1>

        <p>
          Aprenda sobre o robô humanoide
          através de módulos interativos.
        </p>

        <div className="progress-section">

          <span>
            Progresso da jornada (0%)
          </span>

          <div className="progress-bar">
            <div className="progress-fill"></div>
          </div>

        </div>

        <div className="continue-card">

          <div>
            <h2>Comece sua jornada com o NAO</h2>

            <p>
              Explore os módulos e aprenda sobre
              robótica de forma interativa.
            </p>
          </div>

          <button>
            →
          </button>

        </div>

        <section className="dashboard-home">

          <div className="home-card">

            <span>Manual Interativo</span>

            <h2>
              Explore o universo do robô NAO
            </h2>

            <p>
              Aprenda sobre programação,
              sensores, movimentos e interação
              através dos módulos disponíveis.
            </p>

          </div>

          <div className="home-card">

            <span>Objetivo</span>

            <h2>
              Plataforma Educacional
            </h2>

            <p>
              O projeto foi desenvolvido para
              auxiliar estudantes no aprendizado
              sobre o robô humanoide NAO.
            </p>

          </div>

        </section>

      </main>

    </div>

  )
}

export default Dashboard
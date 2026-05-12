import {
  Moon,
  Sun,
  ChevronDown,
  User,
  ArrowLeft
} from 'lucide-react'

import { useState } from 'react'

function Dashboard({ darkMode, setDarkMode }) {

  const [menuOpen, setMenuOpen] = useState(false)

  const [openModule, setOpenModule] = useState(null)

  return (

    <div className={darkMode ? 'dashboard dark' : 'dashboard'}>


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

        <button
          className="back-button"
          onClick={() => window.history.back()}
        >

          <ArrowLeft size={18} />

          Página inicial

        </button>

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
            <h2>Continuar onde parou</h2>

            <p>
              Continue sua experiência exatamente
              do ponto em que você parou.
            </p>
          </div>

          <button>
            →
          </button>

        </div>



        <section className="modules-list">

          <div className="module-item">

            <div
              className="module-title"
              onClick={() =>
                setOpenModule(
                  openModule === 1 ? null : 1
                )
              }
            >

              <div>

                <span>Módulo 1</span>

                <h3>Introdução ao NAO</h3>

              </div>

              <span>
                {openModule === 1 ? '▲' : '▼'}
              </span>

            </div>

            {openModule === 1 && (

              <div className="module-content">

                <p>
                  Conheça a história,
                  características e capacidades
                  básicas do robô NAO.
                </p>

                <button>
                  Visitar módulo
                </button>

              </div>

            )}

          </div>


          <div className="module-item">

            <div
              className="module-title"
              onClick={() =>
                setOpenModule(
                  openModule === 2 ? null : 2
                )
              }
            >

              <div>

                <span>Módulo 2</span>

                <h3>Primeiros Passos</h3>

              </div>

              <span>
                {openModule === 2 ? '▲' : '▼'}
              </span>

            </div>

            {openModule === 2 && (

              <div className="module-content">

                <p>
                  Aprenda a ligar, conectar
                  e realizar configurações iniciais.
                </p>

                <button>
                  Visitar módulo
                </button>

              </div>

            )}

          </div>

          <div className="module-item">

            <div
              className="module-title"
              onClick={() =>
                setOpenModule(
                  openModule === 3 ? null : 3
                )
              }
            >

              <div>

                <span>Módulo 3</span>

                <h3>Programação Básica</h3>

              </div>

              <span>
                {openModule === 3 ? '▲' : '▼'}
              </span>

            </div>

            {openModule === 3 && (

              <div className="module-content">

                <p>
                  Introdução à programação visual
                  e comandos fundamentais.
                </p>

                <button>
                  Visitar módulo
                </button>

              </div>

            )}

          </div>

          <div className="module-item">

            <div
              className="module-title"
              onClick={() =>
                setOpenModule(
                  openModule === 4 ? null : 4
                )
              }
            >

              <div>

                <span>Módulo 4</span>

                <h3>Movimentos e Sensores</h3>

              </div>

              <span>
                {openModule === 4 ? '▲' : '▼'}
              </span>

            </div>

            {openModule === 4 && (

              <div className="module-content">

                <p>
                  Explore como o NAO se move
                  e percebe o ambiente ao seu redor.
                </p>

                <button>
                  Visitar módulo
                </button>

              </div>

            )}

          </div>


          <div className="module-item">

            <div
              className="module-title"
              onClick={() =>
                setOpenModule(
                  openModule === 5 ? null : 5
                )
              }
            >

              <div>

                <span>Módulo 5</span>

                <h3>Interação e Comunicação</h3>

              </div>

              <span>
                {openModule === 5 ? '▲' : '▼'}
              </span>

            </div>

            {openModule === 5 && (

              <div className="module-content">

                <p>
                  Descubra como o NAO se comunica
                  através de voz, gestos e expressões.
                </p>

                <button>
                  Visitar módulo
                </button>

              </div>

            )}

          </div>

          <div className="module-item">

            <div
              className="module-title"
              onClick={() =>
                setOpenModule(
                  openModule === 6 ? null : 6
                )
              }
            >

              <div>

                <span>Módulo 6</span>

                <h3>Visão e Reconhecimento</h3>

              </div>

              <span>
                {openModule === 6 ? '▲' : '▼'}
              </span>

            </div>

            {openModule === 6 && (

              <div className="module-content">

                <p>
                  Entenda as capacidades visuais
                  e de reconhecimento do robô.
                </p>

                <button>
                  Visitar módulo
                </button>

              </div>

            )}

          </div>

        </section>


      </main>

    </div>

  )
}

export default Dashboard
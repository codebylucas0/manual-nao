import {
  Heart,
  Users,
  Building2,
  FlaskConical,
  ArrowLeft
} from 'lucide-react'

function Projeto({ darkMode, setDarkMode }) {

  return (

    <div className={darkMode ? 'project-page dark' : 'project-page'}>

      <div className="project-container">

        <button
          className="back-button"
          onClick={() => window.history.back()}
        >

          <ArrowLeft size={18} />

          Voltar

        </button>


        <div className="project-header">
          <div className="project-icon">

            <Heart size={32} />

          </div>


          <h1>
            Criadores do Projeto
          </h1>

          <p>
            Conheça a equipe por trás
            do projeto "Conheça o NAO".
          </p>

          <section className="project-info">

            <div className="project-box">

              <div className="project-box-icon">
                <Users size={24} />
              </div>

              <div>

                <h3>
                  Equipe de Desenvolvimento
                </h3>

                <p>
                  Ana Silva, Carlos Mendes,
                  Juliana Santos
                </p>

                <span>
                  Desenvolvedores e pesquisadores
                  em robótica educacional
                </span>

              </div>

            </div>


            <div className="project-box">

              <div className="project-box-icon cyan">
                <Building2 size={24} />
              </div>

              <div>

                <h3>
                  Instituição
                </h3>

                <p>
                  Universidade Federal de
                  Tecnologia e Inovação
                </p>

                <span>
                  Centro de Excelência
                  em Robótica Educacional
                </span>

              </div>

            </div>


            <div className="project-box">

              <div className="project-box-icon purple">
                <FlaskConical size={24} />
              </div>

              <div>

                <h3>
                  Laboratório
                </h3>

                <p>
                  Laboratório de Robótica
                  Aplicada à Educação
                </p>

                <span>
                  Pesquisa e desenvolvimento
                  de ferramentas educacionais
                </span>

              </div>

            </div>


          </section>
        </div>

        <section className="motivation-box">

          <h2>
            Motivação do Projeto
          </h2>

          <p>
            Este projeto nasceu da necessidade
            de tornar o aprendizado sobre o robô
            NAO mais acessível e envolvente para
            estudantes e educadores.

            Observamos que, embora a documentação
            oficial seja completa, muitos iniciantes
            enfrentam dificuldades para dar os
            primeiros passos.

            Nossa missão é criar uma ponte entre
            a curiosidade inicial e o domínio técnico,
            oferecendo uma experiência visual,
            moderna e amigável.
          </p>

        </section>

        <div className="thanks-box">

          <h3>
            Agradecemos por fazer parte
            dessa jornada de aprendizado!
          </h3>

          <p>
            Juntos estamos construindo
            um futuro mais criativo
            e tecnológico.
          </p>

        </div>


      </div>
    </div >
  )
}

export default Projeto
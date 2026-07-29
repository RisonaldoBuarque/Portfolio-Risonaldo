import Header from './components/Header'
import About from './components/About'
import Contact from "./components/Contact";
import perfilImg from "./assets/perfil.webp"
import Projects from './components/Projects'
import ScrollReveal from './components/ScrollReveal'
import CursorGlow from './components/CursorGlow'
import BackgroundParallax from './components/BackgroundParallax'
import ExperienceTechnologies from './components/ExperienceTechnologies'
import './App.css'

function App() {
  return (
    <>
     {/* <CursorGlow /> */}
     <ScrollReveal />
     {/* <BackgroundParallax /> */}

      <Header />

      <main>
        <section className="hero" id="inicio">
          <div className="hero-content">
            <p className="welcome">Olá, eu sou</p>

            <h1>Risonaldo Buarque</h1>

            <h2>
              Desenvolvedor <span>Full Stack</span>
            </h2>

            <p className="description">
              Estudante de Engenharia de Software e profissional da área de
              tecnologia, desenvolvendo aplicações modernas com Java,
              Spring Boot, React e PostgreSQL.
            </p>

            <div className="hero-buttons">
              <a href="#projetos" className="primary-button">
                Ver projetos
              </a>

              <a href="#contato" className="secondary-button">
                Entrar em contato
              </a>
            </div>
          </div>

 <div className="profile-area">
          <div className="profile-glow"></div>

          <div className="profile-frame">
           <img
                src={perfilImg}
                alt="Foto de Risonaldo Buarque"
                className="profile-image"
                width="450"
                height="550"
                decoding="async"
                fetchPriority="high"
              />
          </div>

          <div className="floating-badge badge-react">
            React
          </div>

          <div className="floating-badge badge-java">
            Java
          </div>

          <div className="floating-badge badge-sql">
            SQL
          </div>
        </div>
      </section>

      <About />
      <ExperienceTechnologies />
      <Projects />
      <Contact />
      
      
      </main>
    </>
  )
}

export default App

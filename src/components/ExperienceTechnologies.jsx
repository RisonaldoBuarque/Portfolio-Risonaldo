import {
  FaBuilding,
  FaDatabase,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaReact,
} from "react-icons/fa"
import {
  SiJavascript,
  SiPostgresql,
  SiPython,
  SiSpringboot,
  SiVercel,
  SiVite,
} from "react-icons/si"

const experiences = [
  {
    role: "Assistente de Banco de Dados Júnior",
    company: "Projedata",
    period: "Jun/2024 — Atual",
    items: [
      "Suporte técnico e resolução de chamados com foco em qualidade e cumprimento de SLAs.",
      "Manutenção de ambientes Oracle SQL e PL/SQL, análise de erros e otimização de consultas.",
      "Rotinas de backup, Shell Script, certificados SSL e suporte em ambientes Windows e Linux.",
    ],
    technologies: ["Oracle SQL", "PL/SQL", "Linux", "Shell Script", "SSL"],
  },
  {
    role: "Assistente de Importação",
    company: "First S/A",
    period: "Mai/2022 — Nov/2023",
    items: [
      "Atendimento a clientes e fornecedores e acompanhamento de processos.",
      "Conferência de documentos e organização de demandas e prazos.",
      "Comunicação com diferentes áreas para resolução de problemas.",
    ],
    technologies: ["Atendimento", "Organização", "Análise", "Comunicação"],
  },
]

const technologyGroups = [
  {
    title: "Desenvolvimento web",
    technologies: [
      { name: "React", icon: FaReact, status: "Projetos", color: "#61dafb" },
      { name: "Vite", icon: SiVite, status: "Projetos", color: "#a78bfa" },
      { name: "JavaScript", icon: SiJavascript, status: "Projetos", color: "#f7df1e" },
      { name: "Vercel", icon: SiVercel, status: "Projetos", color: "#ffffff" },
    ],
  },
  {
    title: "Back-end e dados",
    technologies: [
      { name: "Java", icon: FaJava, status: "Estudando", color: "#f89820" },
      { name: "Spring Boot", icon: SiSpringboot, status: "Estudando", color: "#6db33f" },
      { name: "PostgreSQL", icon: SiPostgresql, status: "Projetos", color: "#66a3d2" },
      { name: "Oracle", icon: FaDatabase, status: "Uso profissional", color: "#f80000" },
      { name: "Python", icon: SiPython, status: "Conhecimento", color: "#ffd43b" },
    ],
  },
  {
    title: "Ferramentas",
    technologies: [
      { name: "Git", icon: FaGitAlt, status: "Projetos", color: "#f05032" },
      { name: "GitHub", icon: FaGithub, status: "Projetos", color: "#ffffff" },
      { name: "Docker", icon: FaDocker, status: "Estudando", color: "#2496ed" },
    ],
  },
]

function ExperienceTechnologies() {
  return (
    <section id="experiencias" className="experience-tech section-reveal">
      <div className="section-heading">
        <span>Minha trajetória</span>
        <h2>Experiências e tecnologias</h2>
        <p>
          Experiência profissional em suporte e banco de dados, combinada com
          tecnologias modernas utilizadas nos meus projetos de desenvolvimento.
        </p>
      </div>

      <div className="experience-tech-grid">
        <div className="experience-timeline">
          {experiences.map((experience) => (
            <article
              className="experience-item"
              key={`${experience.company}-${experience.role}`}
            >
              <span className="experience-dot" aria-hidden="true"></span>

              <div className="experience-card">
                <div className="experience-card-header">
                  <div>
                    <h3>{experience.role}</h3>

                    <span className="experience-company">
                      <FaBuilding aria-hidden="true" />
                      {experience.company}
                    </span>
                  </div>

                  <span className="experience-period">
                    {experience.period}
                  </span>
                </div>

                <ul className="experience-details">
                  {experience.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <div className="experience-tags">
                  {experience.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <aside className="technology-panel">
          <div className="technology-panel-heading">
            <h3>Tecnologias</h3>
            <p>Ferramentas que utilizo, estudo e aplico nos meus projetos.</p>
          </div>

          <div className="technology-groups">
            {technologyGroups.map((group) => (
              <div className="technology-group" key={group.title}>
                <h4>{group.title}</h4>

                <div className="technology-list">
                  {group.technologies.map((technology) => {
                    const Icon = technology.icon

                    return (
                      <div className="technology-item" key={technology.name}>
                        <span
                          className="technology-icon"
                          aria-hidden="true"
                          style={{ color: technology.color }}
                        >
                          <Icon />
                        </span>

                        <div className="technology-info">
                          <strong>{technology.name}</strong>
                          <span>{technology.status}</span>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="technology-legend">
            <span>
              <i className="status-dot professional"></i>
              Uso profissional
            </span>

            <span>
              <i className="status-dot project-dot"></i>
              Projetos
            </span>

            <span>
              <i className="status-dot studying"></i>
              Estudando
            </span>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default ExperienceTechnologies

const experiences = [
  {
    role: "Analista de Suporte DBA",
    company: "Projedata ",
    period: " 2025 - Atual",
    description:

    
      "Atuação com suporte técnico, bancos de dados Oracle, SQL, PL/SQL, análise de erros, otimização de consultas, rotinas de backup, ambientes Linux e Windows.",
  },
  {
    role: "Assistente de Importação e Exportação",
    company: "Experiência anterior",
    period: " 2024 - 2023",
    description:
      "Atendimento a clientes, acompanhamento de processos, organização documental e comunicação com diferentes áreas para resolução de demandas.",
  },
];


const technologyGroups = [
  {
    title: "Front-end",
    technologies: [
      "React",
      "Vite",
      "JavaScript",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "Back-end",
    technologies: [
      "Java",
      "Spring Boot",
      "Python",
      "APIs REST",
    ],
  },
  {
    title: "Banco de Dados",
    technologies: [
      "Oracle SQL",
      "PL/SQL",
      "PostgreSQL",
    ],
  },
  {
    title: "Ferramentas",
    technologies: [
      "Git",
      "GitHub",
      "Vercel",
      "Linux",
      "Windows",
    ],
  },
];


function ExperienceTechnologies() {
  return (
    <section
      id="experiencias"
      className="experience-tech"
    >

      <div className="section-heading">
        <span>Minha trajetória</span>

        <h2>
          Experiências e tecnologias
        </h2>

        <p>
          Minha experiência profissional em suporte,
          banco de dados e desenvolvimento de aplicações.
        </p>
      </div>


      <div className="experience-tech-grid">


        <div className="experience-list">

          {experiences.map((experience) => (

            <article
              className="experience-card"
              key={experience.role}
            >

              <h3>
                {experience.role}
              </h3>

              <span>
                {experience.company}
              </span>

              <small>
                {experience.period}
              </small>


              <p>
                {experience.description}
              </p>

            </article>

          ))}

        </div>



        <div className="technology-panel">

          <h3>
            Tecnologias
          </h3>


          {technologyGroups.map((group)=>(

            <div
              className="technology-group"
              key={group.title}
            >

              <h4>
                {group.title}
              </h4>


              <div className="technology-tags">

                {group.technologies.map((tech)=>(

                  <span
                    className="technology-tag"
                    key={tech}
                  >
                    {tech}
                  </span>

                ))}

              </div>

            </div>

          ))}


        </div>


      </div>


    </section>
  );
}


export default ExperienceTechnologies;
function Projects() {
  const projects = [
    {
      title: 'Help Desk Full Stack',
      description:
        'Sistema para abertura e gerenciamento de chamados, desenvolvido com Java, Spring Boot, React e PostgreSQL.',
      technologies: ['Java', 'Spring Boot', 'React', 'PostgreSQL'],
      github: 'https://github.com/RisonaldoBuarque/',
    },
    {
      title: 'Landing Page Barbearia',
      description:
        'Página moderna e responsiva para uma barbearia, com serviços, horários, localização e contato pelo WhatsApp.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/RisonaldoBuarque/',
    },
    {
      title: 'Landing Page Academia',
      description:
        'Página responsiva para uma academia, apresentando planos, modalidades, profissionais e formulário de contato.',
      technologies: ['React', 'CSS', 'JavaScript'],
      github: 'https://github.com/RisonaldoBuarque/',
    },
  ]

  return (
    <section className="projects section-reveal" id="projetos">
      <div className="section-heading">
        <span>Meu trabalho</span>
        <h2>Projetos</h2>

        <p>
          Alguns projetos que representam minha evolução e meus estudos em
          desenvolvimento de software.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-card-top">
              <span className="project-status">{project.status}</span>
              <span className="project-folder">⌁</span>
            </div>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="project-technologies">
              {project.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Ver no GitHub →
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
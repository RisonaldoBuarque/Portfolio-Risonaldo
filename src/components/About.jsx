function About() {
  return (
    <section className="about section-reveal" id="sobre">
      <div className="about-title">
        <p>Conheça um pouco</p>
        <h2>Sobre mim</h2>
      </div>

      <div className="about-content">
        <div className="about-text">
          <h3>Desenvolvimento, tecnologia e evolução constante.</h3>

          <p>
            Sou estudante de Engenharia de Software e atualmente trabalho na
            área de tecnologia, adquirindo experiência com suporte técnico,
            bancos de dados, análise de erros e atendimento ao cliente.
          </p>

          <p>
            Estou direcionando minha carreira para o desenvolvimento de
            software, criando projetos com Java, Spring Boot, React,
            JavaScript e PostgreSQL.
          </p>

          <p>
            Meu objetivo é desenvolver soluções organizadas, funcionais e que
            proporcionem uma boa experiência para o usuário.
          </p>
        </div>

        <div className="about-cards">
          <article className="about-card">
            <strong>Java</strong>
            <span>Back-end</span>
          </article>

          <article className="about-card">
            <strong>React</strong>
            <span>Front-end</span>
          </article>

          <article className="about-card">
            <strong>PostgreSQL</strong>
            <span>Banco de dados</span>
          </article>

          <article className="about-card">
            <strong>Git</strong>
            <span>Versionamento</span>
          </article>
        </div>
      </div>
    </section>
  )
}

export default About
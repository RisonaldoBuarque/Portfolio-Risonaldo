function Contact() {
    const mensagem =
    'Olá, Risonaldo! Vi seu portfólio e gostaria de conversar sobre um projeto.'

  const whatsappUrl = `https://wa.me/5548991294861?text=${encodeURIComponent(mensagem)}`
  return (
    <section className="contact section-reveal" id="contato">
      <div className="contact-left">
        <p className="contact-label">Vamos conversar</p>

        <h2>Entre em contato</h2>

        <h3>Vamos transformar sua ideia em um projeto.</h3>

        <p className="contact-description">
          Estou disponível para oportunidades de desenvolvimento, freelances
          e novos desafios.
        </p>

       <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-button"
            >
            Conversar no WhatsApp
        </a>
      </div>

      <div className="contact-cards">
            <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
            >
          <span className="contact-icon">📱</span>

          <div>
            <strong>WhatsApp</strong>
            <p>(55) 48 99129-4861</p>
          </div>
        </a>

        <a href="mailto:buarquerisonaldo@gmail.com" className="contact-card">
          <span className="contact-icon">✉️</span>

          <div>
            <strong>E-mail</strong>
            <p>buarquerisonaldo@gmail.com</p>
          </div>
        </a>

        <a
          href="https://www.linkedin.com/in/risonaldo-buarque-56b3b0207/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <span className="contact-icon">💼</span>

          <div>
            <strong>LinkedIn</strong>
            <p>linkedin.com/in/risonaldo-buarque-56b3b0207</p>
          </div>
        </a>

        <a
          href="https://github.com/RisonaldoBuarque/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <span className="contact-icon">💻</span>

          <div>
            <strong>GitHub</strong>
            <p>github.com/RisonaldoBuarque</p>
          </div>
        </a>
      </div>
    </section>
  )
}

export default Contact
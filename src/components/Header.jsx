import { useState } from 'react'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  function toggleMenu() {
    setMenuOpen(!menuOpen)
  }

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className="header">
      <button
        type="button"
        className={`menu-toggle ${menuOpen ? 'active' : ''}`}
        onClick={toggleMenu}
        aria-label="Abrir ou fechar menu"
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`menu ${menuOpen ? 'menu-open' : ''}`}>
        <a href="#inicio" onClick={closeMenu}>
          Início
        </a>

        <a href="#sobre" onClick={closeMenu}>
          Sobre
        </a>

        <a href="#projetos" onClick={closeMenu}>
          Projetos
        </a>

        <a href="#contato" onClick={closeMenu}>
          Contato
        </a>
      </nav>
    </header>
  )
}

export default Header
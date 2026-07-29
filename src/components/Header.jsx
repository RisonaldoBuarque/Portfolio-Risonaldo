import { useEffect, useRef, useState } from 'react'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const menuRef = useRef(null)
  const buttonRef = useRef(null)

  function toggleMenu() {
    setMenuOpen((menuAtual) => !menuAtual)
  }

  function closeMenu() {
    setMenuOpen(false)
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (!menuOpen) {
        return
      }

      const clicouNoMenu = menuRef.current?.contains(event.target)
      const clicouNoBotao = buttonRef.current?.contains(event.target)

      if (!clicouNoMenu && !clicouNoBotao) {
        setMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('touchstart', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
    }
  }, [menuOpen])

  return (
    <header className="header">
      <button
        ref={buttonRef}
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

      <nav
        ref={menuRef}
        className={`menu ${menuOpen ? 'menu-open' : ''}`}
      >
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
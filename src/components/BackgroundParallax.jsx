import { useEffect } from 'react'

function BackgroundParallax() {
  useEffect(() => {
    function handleMouseMove(event) {
      const x = event.clientX / window.innerWidth
      const y = event.clientY / window.innerHeight

      const moveX = (x - 0.5) * 30
      const moveY = (y - 0.5) * 30

      document.documentElement.style.setProperty(
        '--background-move-x',
        `${moveX}px`,
      )

      document.documentElement.style.setProperty(
        '--background-move-y',
        `${moveY}px`,
      )
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return null
}

export default BackgroundParallax
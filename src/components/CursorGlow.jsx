import { useEffect, useRef } from 'react'

function CursorGlow() {
  const glowRef = useRef(null)

  useEffect(() => {
    function handleMouseMove(event) {
      if (!glowRef.current) return

      glowRef.current.style.transform = `translate3d(
        ${event.clientX - 175}px,
        ${event.clientY - 175}px,
        0
      )`
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return <div ref={glowRef} className="cursor-glow" />
}

export default CursorGlow
import { useEffect, useState } from 'react'

export default function SpotlightBackground() {
  const [coords, setCoords] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCoords({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div
      className='fixed inset-0 pointer-events-none z-0'
      style={{
        background: `radial-gradient(
          400px circle at ${coords.x}px ${coords.y}px,
          rgba(0, 255, 255, 0.01),
          transparent 90%
        )`,
        transition: 'background 0.05s',
      }}
    />
  )
}

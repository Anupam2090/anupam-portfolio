import React, { useState, useEffect } from 'react'

function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement
      const scrolled = h.scrollTop / (h.scrollHeight - h.clientHeight)
      setProgress(scrolled * 100)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '3px',
        zIndex: 999,
        width: `${progress}%`,
        background: 'linear-gradient(90deg, var(--coral), var(--gold))',
        transition: 'width 0.1s linear',
      }}
    />
  )
}

export default ScrollProgress

import React, { useMemo } from 'react'
import { motion } from 'framer-motion'
import './WaveDivider.css'

// deterministic per-point wobble so the "hand-drawn" imperfection stays fixed, not jittery
function wobble(seed) {
  const x = Math.sin(seed * 12.9898) * 43758.5453
  return (x - Math.floor(x)) * 6 - 3
}

function buildPath(width, amplitude, cycles) {
  const points = []
  const steps = 60
  for (let i = 0; i <= steps; i++) {
    const x = (i / steps) * width
    const t = (i / steps) * Math.PI * 2 * cycles
    const y = 20 + Math.sin(t) * amplitude + wobble(i)
    points.push([x, y])
  }

  let d = `M ${points[0][0]},${points[0][1]}`
  for (let i = 1; i < points.length; i++) {
    const [px, py] = points[i - 1]
    const [cx, cy] = points[i]
    const mx = (px + cx) / 2
    const my = (py + cy) / 2
    d += ` Q ${px},${py} ${mx},${my}`
  }
  return d
}

const ACCENTS = {
  coral: 'var(--coral)',
  mint: 'var(--mint)',
  gold: 'var(--gold)',
}

function WaveDivider({ accent = 'mint', amplitude = 10, cycles = 2.5 }) {
  const width = 1000
  const path = useMemo(
    () => buildPath(width, amplitude, cycles),
    [amplitude, cycles]
  )

  return (
    <div className="wave-divider">
      <svg
        className="wave-divider-svg"
        viewBox={`0 0 ${width} 40`}
        preserveAspectRatio="none"
      >
        <motion.path
          d={path}
          fill="none"
          stroke={ACCENTS[accent] || ACCENTS.mint}
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.6 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.4, ease: 'easeInOut' }}
        />
      </svg>
    </div>
  )
}

export default WaveDivider

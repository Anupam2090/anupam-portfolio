import React from 'react'
import { motion } from 'framer-motion'
import './Education.css'

const education = [
  {
    accent: 'var(--coral)',
    title: 'Vidyasagar University — PhD in Computer Science',
    year: '2026 – Present',
    detail: 'PhD Research Scholar',
  },
  {
    accent: 'var(--gold)',
    title: 'Vidyasagar University — MSc Computer Science',
    year: '2022 – 2024',
    detail: 'First Class First',
    honor: 'Gold Medalist 🥇',
  },
  {
    accent: 'var(--mint)',
    title: 'Prabhat Kumar College, Contai — BSc Computer Science',
    year: '2019 – 2021',
    detail: 'CGPA: 9.24 | First Class',
  },
]

const Education = () => (
  <section id="education" className="education">
    <motion.span
      className="education-eyebrow"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      Academic Record
    </motion.span>

    <motion.h2
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      Education
    </motion.h2>

    {education.map((edu, i) => (
      <motion.div
        key={edu.title}
        className="edu-card"
        style={{ '--accent': edu.accent }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: i * 0.1 }}
      >
        <div className="edu-header">
          <h3>{edu.title}</h3>
          <span className="edu-year">{edu.year}</span>
        </div>
        <p>{edu.detail}</p>
        {edu.honor && <span className="edu-honor">🏅 {edu.honor}</span>}
      </motion.div>
    ))}
  </section>
)

export default Education

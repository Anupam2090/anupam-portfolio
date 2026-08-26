import React from 'react'
import { motion } from 'framer-motion'
import { FaTrophy, FaMedal, FaAward, FaStar } from 'react-icons/fa'
import './Awards.css'

// Add more awards here anytime — icon options: FaTrophy, FaMedal, FaAward, FaStar
// accent: 'var(--gold)' | 'var(--coral)' | 'var(--mint)'
const awards = [
  {
    icon: <FaMedal />,
    title: 'Gold Medalist',
    issuer: 'MSc Computer Science, Vidyasagar University',
    year: '2024',
    accent: 'var(--gold)',
  },
  // {
  //   icon: <FaTrophy />,
  //   title: 'Award Name',
  //   issuer: 'Issuing Body',
  //   year: '2026',
  //   accent: 'var(--coral)',
  // },
]

const Awards = () => (
  <section id="awards" className="awards">
    <motion.span
      className="awards-eyebrow"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      Recognition
    </motion.span>

    <motion.h2
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      Awards
    </motion.h2>

    <div className="awards-grid">
      {awards.length === 0 ? (
        <div className="award-empty">
          <p>More achievements on the way.</p>
          <p>This space will grow as new milestones are reached.</p>
        </div>
      ) : (
        awards.map((award, i) => (
          <motion.div
            key={award.title}
            className="award-card"
            style={{ '--accent': award.accent }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="award-medal">{award.icon}</div>
            <h3 className="award-title">{award.title}</h3>
            <p className="award-issuer">{award.issuer}</p>
            <span className="award-year">{award.year}</span>
          </motion.div>
        ))
      )}
    </div>
  </section>
)

export default Awards

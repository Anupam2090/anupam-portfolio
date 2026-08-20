import React from 'react'
import { motion } from 'framer-motion'
import './Publications.css'

// Add entries here as papers/conferences happen — nothing else needs to change.
// status: 'Published' | 'Accepted' | 'Under Review' | 'In Preparation'
const publications = [
  // {
  //   title: 'Your Paper Title Here',
  //   venue: 'Conference / Journal Name',
  //   year: '2026',
  //   status: 'Under Review',
  //   link: 'https://doi.org/...',
  // },
]

const accents = ['var(--coral)', 'var(--mint)', 'var(--gold)']

const Publications = () => (
  <section id="publications" className="publications">
    <motion.span
      className="publications-eyebrow"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      Research
    </motion.span>

    <motion.h2
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      Publications
    </motion.h2>

    {publications.length === 0 ? (
      <motion.div
        className="pub-empty"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p>First paper in progress.</p>
        <p>Details will be added here as they're submitted and published.</p>
      </motion.div>
    ) : (
      publications.map((pub, i) => (
        <motion.div
          key={pub.title}
          className="pub-card"
          style={{ '--accent': accents[i % accents.length] }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          <span className="pub-index">[{String(i + 1).padStart(2, '0')}]</span>
          <div className="pub-body">
            <h3 className="pub-title">
              {pub.link ? (
                <a href={pub.link} target="_blank" rel="noopener noreferrer">
                  {pub.title}
                </a>
              ) : (
                pub.title
              )}
            </h3>
            <div className="pub-meta">
              <span className="pub-venue">{pub.venue}</span>
              <span>·</span>
              <span>{pub.year}</span>
              <span className="pub-status">{pub.status}</span>
            </div>
          </div>
        </motion.div>
      ))
    )}
  </section>
)

export default Publications

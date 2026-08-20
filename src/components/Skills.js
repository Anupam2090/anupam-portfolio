import React from 'react'
import { motion } from 'framer-motion'
import './Skills.css'

const skills = {
  Programming: ['Python', 'PHP', 'Java'],
  'Machine Learning': ['Pandas', 'NumPy', 'Scikit-learn', 'PySpark', 'NLP'],
  Web: ['Flask', 'Streamlit', 'Laravel', 'HTML', 'CSS'],
  Cloud: ['AWS', 'Windows', 'Linux'],
  Tools: ['Git', 'GitHub', 'MySQL', 'VS Code', 'Jupyter Notebook'],
}

const accents = ['var(--coral)', 'var(--mint)', 'var(--gold)']

const Skills = () => (
  <section id="skills" className="skills">
    <motion.span
      className="skills-eyebrow"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      Toolbox
    </motion.span>

    <motion.h2
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      Skills
    </motion.h2>

    <div className="skills-grid">
      {Object.entries(skills).map(([category, items], i) => (
        <motion.div
          key={category}
          className="skill-card"
          style={{ '--accent': accents[i % accents.length] }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
        >
          <h3>{category}</h3>
          <ul className="skill-tags">
            {items.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  </section>
)

export default Skills

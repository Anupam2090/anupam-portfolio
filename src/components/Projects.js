import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import './Projects.css'

const projects = [
  {
    name: 'AI-Powered Nutrition Recommendation System',
    tech: ['Python', 'Scikit-learn', 'Streamlit'],
    link: 'https://github.com/Anupam2090',
  },
  {
    name: 'Global Superstore Data Analysis',
    tech: ['Pandas', 'Matplotlib'],
    link: 'https://github.com/Anupam2090',
  },
  {
    name: 'Phishing Email Detector Web App',
    tech: ['Flask', 'NLP'],
    link: 'https://github.com/Anupam2090',
  },
  {
    name: 'AI Image Story Generator',
    tech: ['AI APIs', 'JS'],
    link: 'https://github.com/Anupam2090',
  },
]

const accents = ['var(--coral)', 'var(--mint)', 'var(--gold)']

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <motion.span
        className="projects-eyebrow"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Selected Work
      </motion.span>

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h2>

      <div className="project-grid">
        {projects.map((p, i) => (
          <motion.a
            href={p.link}
            key={p.name}
            className="project-card"
            style={{ '--accent': accents[i % accents.length] }}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <div className="project-card-top">
              <h3>{p.name}</h3>
              <FaExternalLinkAlt className="project-arrow" />
            </div>
            <ul className="project-tech">
              {p.tech.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </motion.a>
        ))}
      </div>

      <div className="more-projects">
        <p>For more projects, visit my GitHub</p>
        
          <a href="https://github.com/Anupam2090"
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          <FaGithub /> GitHub Profile
        </a>
      </div>
    </section>
  )
}

export default Projects
import React from 'react'
import { motion } from 'framer-motion'
import './Experience.css'

const roles = [
  {
    title:
      'Junior Software Developer — AIVISTA Technologies Pvt. Ltd. (Remote)',
    period: 'Aug 2024 – Nov 2024',
    points: [
      'Developed web apps in PHP and Python (Flask) with backend API integration.',
      'Participated in collaborative system development workflows.',
    ],
  },
  {
    title: 'Cloud & Software Developer — Adamas Tech Consulting',
    period: 'Nov 2025 – Feb 2026',
    points: [
      'Worked with AWS EC2, snapshots, and lifecycle policies.',
      'Assisted in server migration and deployment workflows.',
    ],
  },
]

const Experience = () => (
  <section id="experience" className="experience">
    <motion.span
      className="experience-eyebrow"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      Work Log
    </motion.span>

    <motion.h2
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      Experience
    </motion.h2>

    <div className="experience-log">
      {roles.map((role, i) => (
        <motion.div
          key={role.title}
          className="experience-card"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: i * 0.12 }}
        >
          <div className="exp-titlebar">
            <span className="dot-1" />
            <span className="dot-2" />
            <span className="dot-3" />
          </div>
          <div className="exp-header">
            <h3>{role.title}</h3>
            <span className="exp-year">{role.period}</span>
          </div>
          <ul>
            {role.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  </section>
)

export default Experience

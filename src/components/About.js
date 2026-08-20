import React from 'react'
import { motion } from 'framer-motion'
import './About.css'

const milestones = [
  {
    label: 'Undergraduate',
    text: `I'm from Contai, Purba Medinipur, West Bengal. I completed my undergraduate studies in Computer Science at Prabhat Kumar College, Contai, where I built a strong foundation in programming and computational thinking.`,
  },
  {
    label: 'Postgraduate — Gold Medalist',
    text: `I pursued my Master's degree in Computer Science at Vidyasagar University, where I graduated as a Gold Medalist. This is where I developed a deeper interest in software development, research, and data-driven technologies.`,
  },
  {
    label: 'Industry',
    text: `I gained industry experience working as a software developer, contributing to web application development, backend systems, and cloud-based workflows using technologies such as PHP, Python, and AWS.`,
  },
  {
    label: 'PhD — Current',
    text: `I am currently pursuing a PhD in Computer Science at Vidyasagar University. My research explores innovative computational approaches and intelligent systems that bridge academic research with real-world technological applications.`,
    current: true,
  },
  {
    label: 'Beyond Work',
    text: `I have a strong passion for painting. It lets me relax, express creativity, and maintain a balanced perspective alongside my research and technical work.`,
    creative: true,
  },
]

const About = () => (
  <section id="about" className="about">
    <div className="about-inner">
      <motion.span
        className="about-eyebrow"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        The Journey
      </motion.span>

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>

      <div className="timeline">
        {milestones.map((item, i) => (
          <motion.div
            key={item.label}
            className={`timeline-item ${item.current ? 'current' : ''} ${item.creative ? 'creative' : ''}`}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <span className="timeline-dot" />
            <div className="timeline-card">
              <span className="timeline-label">{item.label}</span>
              <p>{item.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

export default About

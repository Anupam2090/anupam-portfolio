import React from 'react'
import { motion } from 'framer-motion'
import './Hero.css'

const Hero = () => (
  <section className="hero" id="hero">
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="hero-content"
    >
      <h2>Hello, I'm</h2>
      <h1>Anupam Bera</h1>
      <p>Gold Medalist in Computer Science • Software & Cloud Developer</p>
      <a href="#projects" className="btn">
        View My Work
      </a>
    </motion.div>
  </section>
)

export default Hero

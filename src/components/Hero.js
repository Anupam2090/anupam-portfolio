import React from 'react'
import { motion } from 'framer-motion'
import profile from '../assets/Profile.jpeg'
import './Hero.css'

const Hero = () => (
  <section className="hero" id="hero">
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="hero-content"
    >
      <img src={profile} alt="Anupam Bera" className="profile-img" />

      <h2>Hello, I'm</h2>
      <h1>Anupam Bera</h1>
      <p>AI Researcher • Software Developer • Artist</p>

      <div className="hero-buttons">
        <a href="#projects" className="btn">
          View Projects
        </a>

        <a href="/resume.pdf" download className="btn resume-btn">
          Download Resume
        </a>
      </div>
    </motion.div>
  </section>
)

export default Hero

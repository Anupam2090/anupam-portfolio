import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import profile from '../assets/Profile.jpeg'
import './Hero.css'

const roles = ['PhD Scholar', 'Software Developer', 'Artist 🎨']

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }, 2200)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="hero" id="hero">
      <div className="hero-bg-glow">
        <span className="blob-1" />
        <span className="blob-2" />
        <span className="blob-3" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="hero-content"
      >
        <motion.div
          className="profile-wrap"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <svg
            className="ink-blot"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                id="blotGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#ff6b4a" />
                <stop offset="100%" stopColor="#e3b23c" />
              </linearGradient>
            </defs>
            <path
              fill="url(#blotGradient)"
              d="M100,20 C140,20 175,45 178,85 C181,125 155,165 110,178 C65,191 25,160 20,115 C15,70 55,20 100,20 Z"
            />
          </svg>
          <img src={profile} alt="Anupam Bera" className="profile-img" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          Hello, I'm
        </motion.h2>

        <div className="name-wrap">
          <h1>Anupam Bera</h1>
          <svg
            className="brush-underline"
            viewBox="0 0 300 18"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient
                id="brushGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#ff6b4a" />
                <stop offset="100%" stopColor="#e3b23c" />
              </linearGradient>
            </defs>
            <motion.path
              d="M4,10 C60,2 120,16 150,8 C190,-2 250,14 296,6"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 0.9, ease: 'easeInOut' }}
            />
          </svg>
        </div>

        <div className="role-line">
          <AnimatePresence mode="wait">
            <motion.span
              key={roleIndex}
              className="role-active"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              {roles[roleIndex]}
            </motion.span>
          </AnimatePresence>
        </div>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          <a href="#projects" className="btn">
            View Projects
          </a>
          <a href="/resume.pdf" download className="resume-btn">
            Download Resume
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero

import React, { useState } from 'react'
import './Navbar.css'
import { FaGithub, FaLinkedin, FaSun, FaMoon } from 'react-icons/fa'
import { AnimatePresence, motion } from 'framer-motion'
import { useTheme } from '../hooks/useTheme'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  const links = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#education', label: 'Education' },
    { href: '#publications', label: 'Publications' },
    { href: '#contact', label: 'Contact' },
  ]

  const closeMenu = () => setIsOpen(false)

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="logo">
          Anupam<span>.</span>
        </div>

        <div className="nav-links">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </div>

        <div className="nav-right">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={theme}
                initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
                transition={{ duration: 0.25 }}
              >
                {theme === 'dark' ? <FaMoon /> : <FaSun />}
              </motion.span>
            </AnimatePresence>
          </button>

          <div className="socials">
            <a
              href="https://github.com/Anupam2090"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/anupam-bera"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>

          <button
            className={`nav-toggle ${isOpen ? 'open' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <div className={`nav-mobile-panel ${isOpen ? 'open' : ''}`}>
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={closeMenu}>
            {l.label}
          </a>
        ))}
      </div>
    </nav>
  )
}

export default Navbar

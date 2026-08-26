

import React, { useState, useRef, useEffect } from 'react'
import './Navbar.css'
import {
  FaGithub,
  FaLinkedin,
  FaSun,
  FaMoon,
  FaChevronDown,
} from 'react-icons/fa'
import { AnimatePresence, motion } from 'framer-motion'
import { useTheme } from '../hooks/useTheme'

const primaryLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
]

const academicLinks = [
  { href: '#education', label: 'Education' },
  { href: '#awards', label: 'Awards' },
  { href: '#publications', label: 'Publications' },
]

const contactLink = {
  href: '#contact',
  label: 'Contact',
}

function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [isAcademicsOpen, setIsAcademicsOpen] = useState(false)

  const { theme, toggleTheme } = useTheme()

  const dropdownRef = useRef(null)

  // Close mobile menu
  const closeMenu = () => {
    setIsMobileOpen(false)
  }

  // Close Academics dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setIsAcademicsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener(
        'mousedown',
        handleClickOutside
      )
    }
  }, [])

  return (
    <nav className="navbar">
      <div className="navbar-inner">

        {/* Logo */}
        <div className="logo">
          Anupam<span>.</span>
        </div>

        {/* Desktop Navigation */}
        <div className="nav-links">

          {/* Primary Links */}
          {primaryLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
            >
              {l.label}
            </a>
          ))}

          {/* Academics Dropdown */}
          <div
            className="nav-dropdown"
            ref={dropdownRef}
            onMouseEnter={() =>
              setIsAcademicsOpen(true)
            }
            onMouseLeave={() =>
              setIsAcademicsOpen(false)
            }
          >
            <button
              type="button"
              className="nav-dropdown-trigger"
              onClick={() =>
                setIsAcademicsOpen((prev) => !prev)
              }
              aria-expanded={isAcademicsOpen}
              aria-haspopup="true"
            >
              <span>Academics</span>

              <FaChevronDown
                className={`nav-dropdown-chevron ${
                  isAcademicsOpen ? 'open' : ''
                }`}
              />
            </button>

            {/* Dropdown Menu */}
            <AnimatePresence>
              {isAcademicsOpen && (
                <motion.div
                  className="nav-dropdown-menu"
                  initial={{
                    opacity: 0,
                    y: -8,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -8,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                >
                  {academicLinks.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      onClick={() =>
                        setIsAcademicsOpen(false)
                      }
                    >
                      {l.label}
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Contact */}
          <a
            href={contactLink.href}
          >
            {contactLink.label}
          </a>

        </div>

        {/* Right Side */}
        <div className="nav-right">

          {/* Theme Toggle */}
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            <AnimatePresence
              mode="wait"
              initial={false}
            >
              <motion.span
                key={theme}
                initial={{
                  opacity: 0,
                  rotate: -90,
                  scale: 0.6,
                }}
                animate={{
                  opacity: 1,
                  rotate: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  rotate: 90,
                  scale: 0.6,
                }}
                transition={{
                  duration: 0.25,
                }}
              >
                {theme === 'dark' ? (
                  <FaMoon />
                ) : (
                  <FaSun />
                )}
              </motion.span>
            </AnimatePresence>
          </button>

          {/* Social Links */}
          <div className="socials">

            {/* GitHub */}
            <a
              href="https://github.com/Anupam2090"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/anupam-bera"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className={`nav-toggle ${
              isMobileOpen ? 'open' : ''
            }`}
            onClick={() =>
              setIsMobileOpen((prev) => !prev)
            }
            aria-label="Toggle menu"
            aria-expanded={isMobileOpen}
            aria-controls="mobile-navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        id="mobile-navigation"
        className={`nav-mobile-panel ${
          isMobileOpen ? 'open' : ''
        }`}
      >
        {[
          ...primaryLinks,
          ...academicLinks,
          contactLink,
        ].map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={closeMenu}
          >
            {l.label}
          </a>
        ))}
      </div>
    </nav>
  )
}

export default Navbar

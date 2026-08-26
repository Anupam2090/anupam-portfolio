
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
  const [isMobileAcademicsOpen, setIsMobileAcademicsOpen] =
    useState(false)

  const { theme, toggleTheme } = useTheme()

  const dropdownRef = useRef(null)

  // Close mobile menu
  const closeMenu = () => {
    setIsMobileOpen(false)
    setIsMobileAcademicsOpen(false)
  }

  // Close desktop dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
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

      {/* =========================
          NAVBAR INNER
      ========================== */}
      <div className="navbar-inner">

        {/* Logo */}
        <div className="logo">
          Anupam<span>.</span>
        </div>

        {/* =========================
            DESKTOP NAVIGATION
        ========================== */}
        <div className="nav-links">

          {/* Primary Links */}
          {primaryLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
            >
              {link.label}
            </a>
          ))}

          {/* =========================
              ACADEMICS DROPDOWN
          ========================== */}
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
                setIsAcademicsOpen(
                  (previous) => !previous
                )
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

            {/* Dropdown */}
            <AnimatePresence>
              {isAcademicsOpen && (
                <motion.div
                  className="nav-dropdown-menu"
                  initial={{
                    opacity: 0,
                    y: -10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -10,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                >

                  {academicLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() =>
                        setIsAcademicsOpen(false)
                      }
                    >
                      {link.label}
                    </a>
                  ))}

                </motion.div>
              )}
            </AnimatePresence>

          </div>

          {/* Contact */}
          <a href={contactLink.href}>
            {contactLink.label}
          </a>

        </div>

        {/* =========================
            RIGHT SIDE
        ========================== */}
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

          {/* =========================
              SOCIAL LINKS
          ========================== */}
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

          {/* =========================
              MOBILE MENU BUTTON
          ========================== */}
          <button
            type="button"
            className={`nav-toggle ${
              isMobileOpen ? 'open' : ''
            }`}
            onClick={() =>
              setIsMobileOpen(
                (previous) => !previous
              )
            }
            aria-label="Toggle menu"
            aria-expanded={isMobileOpen}
            aria-controls="mobile-navigation"
          >
            <span />
            <span />
            <span />
          </button>

        </div>

      </div>

      {/* =========================
          MOBILE NAVIGATION
      ========================== */}
      <div
        id="mobile-navigation"
        className={`nav-mobile-panel ${
          isMobileOpen ? 'open' : ''
        }`}
      >

        {/* Primary Links */}
        {primaryLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={closeMenu}
          >
            {link.label}
          </a>
        ))}

        {/* Mobile Academics */}
        <button
          type="button"
          className="mobile-academics-trigger"
          onClick={() =>
            setIsMobileAcademicsOpen(
              (previous) => !previous
            )
          }
          aria-expanded={isMobileAcademicsOpen}
        >
          <span>Academics</span>

          <FaChevronDown
            className={`nav-dropdown-chevron ${
              isMobileAcademicsOpen ? 'open' : ''
            }`}
          />
        </button>

        {/* Mobile Academics Submenu */}
        <div
          className={`mobile-academics-panel ${
            isMobileAcademicsOpen ? 'open' : ''
          }`}
        >
          {academicLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Contact */}
        <a
          href={contactLink.href}
          onClick={closeMenu}
        >
          {contactLink.label}
        </a>

      </div>

    </nav>
  )
}

export default Navbar


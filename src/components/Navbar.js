import React from 'react'
import './Navbar.css'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="logo">
          Anupam<span>.</span>
        </div>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#publications">Publications</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="nav-right">
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
        </div>
      </div>
    </nav>
  )
}

export default Navbar
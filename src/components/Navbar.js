import React from 'react'
import './Navbar.css'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Anupam</div>

      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="nav-right">
        <div className="socials">
          <a
            href="https://github.com/Anupam2090"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/anupam-bera"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

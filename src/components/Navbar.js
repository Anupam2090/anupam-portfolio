import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import './Navbar.css'

const Navbar = () => (
  <nav className="navbar">
    <h1 className="logo">Anupam Bera</h1>
    <div className="nav-links">
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </div>
    <div className="socials">
      <a href="[github.com](https://github.com/Anupam2090)">
        <FaGithub />
      </a>
      <a href="[linkedin.com](https://linkedin.com/in/anupam-bera)">
        <FaLinkedin />
      </a>
    </div>
  </nav>
)

export default Navbar

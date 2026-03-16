import React from 'react'
import './Experience.css'

const Experience = () => (
  <section id="experience">
    <h2>Experience</h2>

    <div className="experience-card">
      <div className="exp-header">
        <h3>
          Junior Software Developer — AIVISTA Technologies Pvt. Ltd. (Remote)
        </h3>
        <span className="exp-year">Aug 2024 – Nov 2024</span>
      </div>

      <ul>
        <li>
          Developed web apps in PHP and Python (Flask) with backend API
          integration.
        </li>
        <li>Participated in collaborative system development workflows.</li>
      </ul>
    </div>

    <div className="experience-card">
      <div className="exp-header">
        <h3>Cloud & Software Developer — Adamas Tech Consulting</h3>
        <span className="exp-year">Nov 2025 – Feb 2026</span>
      </div>

      <ul>
        <li>Worked with AWS EC2, snapshots, and lifecycle policies.</li>
        <li>Assisted in server migration and deployment workflows.</li>
      </ul>
    </div>
  </section>
)

export default Experience

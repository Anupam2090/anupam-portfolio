import React from 'react'
import './Education.css'

const Education = () => (
  <section id="education" className="education">
    <h2>Education</h2>

    <div className="edu-card">
      <div className="edu-header">
        <h3>Vidyasagar University — PhD in Computer Science</h3>
        <span className="edu-year">2026 – Present</span>
      </div>
      <p>PhD Research Scholar</p>
    </div>

    <div className="edu-card">
      <div className="edu-header">
        <h3>Vidyasagar University — MSc Computer Science</h3>
        <span className="edu-year">2022 – 2024</span>
      </div>
      <p>CGPA: 9.21 | Gold Medalist 🥇</p>
    </div>

    <div className="edu-card">
      <div className="edu-header">
        <h3>Prabhat Kumar College, Contai — BSc Computer Science</h3>
        <span className="edu-year">2019 – 2021</span>
      </div>
      <p>CGPA: 9.24 | First Class</p>
    </div>
  </section>
)

export default Education

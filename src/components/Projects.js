import React from 'react'
import './Projects.css'

const projects = [
  {
    name: 'AI-Powered Nutrition Recommendation System',
    tech: 'Python, Scikit-learn, Streamlit',
    link: '[github.com](https://github.com/Anupam2090)',
  },
  {
    name: 'Global Superstore Data Analysis',
    tech: 'Pandas, Matplotlib',
    link: '[github.com](https://github.com/Anupam2090)',
  },
  {
    name: 'Phishing Email Detector Web App',
    tech: 'Flask, NLP',
    link: '[github.com](https://github.com/Anupam2090)',
  },
  {
    name: 'AI Image Story Generator',
    tech: 'AI APIs, JS',
    link: '[github.com](https://github.com/Anupam2090)',
  },
]

const Projects = () => (
  <section id="projects" className="projects">
    <h2>Projects</h2>
    <div className="project-grid">
      {projects.map((p) => (
        <a href={p.link} key={p.name} className="project-card">
          <h3>{p.name}</h3>
          <p>{p.tech}</p>
        </a>
      ))}
    </div>
  </section>
)

export default Projects

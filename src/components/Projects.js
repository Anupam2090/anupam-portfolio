import React from 'react'
import './Projects.css'
import { FaGithub } from 'react-icons/fa'

const projects = [
  {
    name: 'AI-Powered Nutrition Recommendation System',
    tech: 'Python, Scikit-learn, Streamlit',
    link: 'https://github.com/Anupam2090',
  },
  {
    name: 'Global Superstore Data Analysis',
    tech: 'Pandas, Matplotlib',
    link: 'https://github.com/Anupam2090',
  },
  {
    name: 'Phishing Email Detector Web App',
    tech: 'Flask, NLP',
    link: 'https://github.com/Anupam2090',
  },
  {
    name: 'AI Image Story Generator',
    tech: 'AI APIs, JS',
    link: 'https://github.com/Anupam2090',
  },
]

const Projects = () => (
  <section id="projects" className="projects">
    <h2>Projects</h2>

    <div className="project-grid">
      {projects.map((p) => (
        <a
          href={p.link}
          key={p.name}
          className="project-card"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3>{p.name}</h3>
          <p>{p.tech}</p>
        </a>
      ))}
    </div>

    {/* More Projects Section */}

    <div className="more-projects">
      <p>For more projects, visit my GitHub</p>

      <a
        href="https://github.com/Anupam2090"
        target="_blank"
        rel="noopener noreferrer"
        className="github-link"
      >
        <FaGithub /> GitHub Profile
      </a>
    </div>
  </section>
)

export default Projects

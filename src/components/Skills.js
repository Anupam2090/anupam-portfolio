import React from 'react'
import './Skills.css'

const skills = {
  Programming: ['Python', 'PHP', 'Java'],
  'Machine Learning': ['Pandas', 'NumPy', 'Scikit-learn', 'PySpark', 'NLP'],
  Web: ['Flask', 'Streamlit', 'Laravel', 'HTML', 'CSS'],
  Cloud: ['AWS', 'Windows', 'Linux'],
  Tools: ['Git', 'GitHub', 'MySQL', 'VS Code', 'Jupyter Notebook'],
}

const Skills = () => (
  <section id="skills" className="skills">
    <h2>Skills</h2>
    <div className="skills-grid">
      {Object.entries(skills).map(([category, items]) => (
        <div key={category} className="skill-card">
          <h3>{category}</h3>
          <ul>
            {items.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
)

export default Skills

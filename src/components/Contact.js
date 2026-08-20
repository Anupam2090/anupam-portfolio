import React from 'react'
import { motion } from 'framer-motion'
import { FaPhone, FaEnvelope, FaLinkedin } from 'react-icons/fa'
import './Contact.css'

const channels = [
  {
    icon: <FaPhone />,
    accent: 'var(--mint)',
    content: <span>+91 6294600797</span>,
  },
  {
    icon: <FaEnvelope />,
    accent: 'var(--gold)',
    content: (
      <a href="mailto:anupambera896@gmail.com">anupambera896@gmail.com</a>
    ),
  },
  {
    icon: <FaLinkedin />,
    accent: 'var(--coral)',
    content: (
      
        <a href="https://linkedin.com/in/anupam-bera"
        target="_blank"
        rel="noopener noreferrer"
      >
        linkedin.com/in/anupam-bera
      </a>
    ),
  },
]

function Contact() {
  return (
    <section id="contact" className="contact">
      <motion.span
        className="contact-eyebrow"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Get In Touch
      </motion.span>

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Contact Me
      </motion.h2>

      <p className="contact-subtext">
        Open to research collaborations, development work, and a good conversation about either.
      </p>

      <div className="contact-container">
        {channels.map((c, i) => (
          <motion.div
            key={i}
            className="contact-item"
            style={{ '--accent': c.accent }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <span className="contact-icon">{c.icon}</span>
            {c.content}
          </motion.div>
        ))}
      </div>

      <motion.div
        className="contact-message"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <a href="mailto:anupambera896@gmail.com" className="message-btn">
          ✉ Send Me a Message
        </a>
      </motion.div>
    </section>
  )
}

export default Contact
import React from 'react'
import './Contact.css'
import { FaPhone, FaEnvelope, FaLinkedin } from 'react-icons/fa'

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>

      <div className="contact-container">
        <div className="contact-item">
          <FaPhone className="contact-icon" />
          <span>+91 6294600797</span>
        </div>

        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <a href="mailto:anupambera896@gmail.com">anupambera896@gmail.com</a>
        </div>

        <div className="contact-item">
          <FaLinkedin className="contact-icon" />
          <a
            href="https://linkedin.com/in/anupam-bera"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/anupam-bera
          </a>
        </div>
      </div>

      <div className="contact-message">
        <a href="mailto:anupambera896@gmail.com" className="message-btn">
          ✉ Send Me a Message
        </a>
      </div>
    </section>
  )
}

export default Contact

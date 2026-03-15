import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs
      .sendForm('service_id', 'template_id', form.current, 'public_key')
      .then(() => alert('Message sent!'))
      .catch(() => alert('Failed, please try again.'))
  }

  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea
          name="message"
          placeholder="Message"
          rows="5"
          required
        ></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  )
}

export default Contact

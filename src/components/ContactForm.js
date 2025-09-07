import React from 'react'
import { useState } from 'react'
import styles from './ContactForm.module.css'

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    })
    setIsSubmitted(true)
    // Handle form submission
  }
  // return (
  //   <form className={styles.contactForm} onSubmit={handleSubmit}>
  //     <label htmlFor="first-name" className={styles.label}>First Name</label>
  //     <input type="text" id="first-name" name="firstName" onChange={handleChange} className={styles.input} placeholder="First Name" required />
  //     <label htmlFor="last-name" className={styles.label}>Last Name</label>
  //     <input type="text" id="last-name" name="lastName" onChange={handleChange} className={styles.input} placeholder="Last Name" required />
  //     <label htmlFor="email" className={styles.label}>Email</label>
  //     <input type="email" id="email" name="email" onChange={handleChange} className={styles.input} placeholder="Your Email" required />
  //     <label htmlFor="message" className={styles.label}>Message</label>
  //     <textarea id="message" name="message" onChange={handleChange} className={styles.textarea} placeholder="Your Message" required></textarea>
  //     <button type="submit" className={styles.button} disabled={!formData.firstName || !formData.lastName || !formData.email || !formData.message}>Send Message</button>
  //   </form>
  // )
  return (isSubmitted ? 
    <div className={styles.contactForm}>
      <p className={styles.thankYouMessage}>Thank you for reaching out! I'll get back to you soon.</p>
      <button className={styles.button} onClick={() => setIsSubmitted(false)}>Send Another Message</button>
    </div>
    :
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      <label htmlFor="first-name" className={styles.label}>First Name</label>
      <input type="text" id="first-name" name="firstName" onChange={handleChange} className={styles.input} placeholder="First Name" required />
      <label htmlFor="last-name" className={styles.label}>Last Name</label>
      <input type="text" id="last-name" name="lastName" onChange={handleChange} className={styles.input} placeholder="Last Name" required />
      <label htmlFor="email" className={styles.label}>Email</label>
      <input type="email" id="email" name="email" onChange={handleChange} className={styles.input} placeholder="Your Email" required />
      <label htmlFor="message" className={styles.label}>Message</label>
      <textarea id="message" name="message" onChange={handleChange} className={styles.textarea} placeholder="Your Message" required></textarea>
      <button type="submit" className={styles.button} disabled={!formData.firstName || !formData.lastName || !formData.email || !formData.message}>Send Message</button>
    </form>
  )
}

export default ContactForm

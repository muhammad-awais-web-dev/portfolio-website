import React from 'react'
import styles from './Contact.module.css'
import ContactForm from './ContactForm'
import socialLinks from '../data/socialLinks';

function Contact() {
  return (
    <section className={styles.contact}>
        <h2>Connect</h2>
        <p>Ready to bring your ideas to life? Let's discuss your project and create something amazing together.</p>
        <div className={styles.contactContainer}>
            <div className={styles.contactInfo}>
                <h3>Contact Information</h3>
                <p><i className='fas fa-envelope'></i>Email: awaisrafique4929@gmail.com</p>
                <p><i className='fas fa-phone'></i>Phone: (+92)325-9350593</p>
                <p><i className='fas fa-map-marker-alt'></i>Location: Pakistan</p>
                <h3>Connect with Me</h3>
                <div className={styles.socialButtonsContainer}>
                    {socialLinks.map(link => (
                        <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.socialButton}
                        >
                            <i className={link.iconClass}></i>
                            <span className={styles.iconText}>{link.name}</span>
                        </a>
                    ))}
                </div>
            </div>
            <div className={styles.contactForm}>
                <ContactForm />
            </div>
        </div>
    </section>
  )
}


export default Contact

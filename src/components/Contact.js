import React from 'react'
import styles from './Contact.module.css'
import ContactForm from './ContactForm'

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
                    <a
                        href="https://www.facebook.com/profile.php?id=61573732746181"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialButton}
                    >
                        <i className="fa-brands fa-facebook"></i>
                        <span className={styles.iconText}>Facebook</span>
                    </a>

                    <a
                        href="https://x.com/WebMorph_Studio"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialButton}
                    >
                        <i className="fa-brands fa-x-twitter"></i>
                        <span className={styles.iconText}>Twitter</span>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/muhammad-awais-webdev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialButton}
                    >
                        <i className="fa-brands fa-linkedin"></i>
                        <span className={styles.iconText}>LinkedIn</span>
                    </a>

                    <a
                        href="https://github.com/muhammad-awais-web-dev/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialButton}
                    >
                        <i className="fa-brands fa-github"></i>
                        <span className={styles.iconText}>GitHub</span>
                    </a>
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

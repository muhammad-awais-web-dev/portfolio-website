import React from 'react'
import style from './Footer.module.css'
import { Link } from "react-router-dom";
import socialLinks from '../data/socialLinks';

function Footer() {
  return (
    <footer className={style.footer}>
        <div className={style.footerContent}>
            <div className={style.footerItem}>
                <h3>Muhammad Awais<span><br />Web Developer</span></h3>
                <p className={style.footerDescription}>Web Developer & UX/UI Designer specializing in React.js and modern web technologies.</p>
            </div>
            <nav className={style.footerItem}>
                <h3 className={style.footerTitle}>Quick Links</h3>
                <ul className={style.footerMenu}>
                        <li><Link to="/" className={style.footerLink} >Home</Link></li>
                        <li><Link to="/about" className={style.footerLink}>About</Link></li>
                        <li><Link to="/projects" className={style.footerLink}>Projects</Link></li>
                        <li><Link to="/certifications" className={style.footerLink}>Certifications</Link></li>
                        <li><Link to="/services" className={style.footerLink}>Services</Link></li>
                </ul>
            </nav>
            <div className={style.footerItem}>
                <h3 className={style.footerTitle}>Connect</h3>
                <p >Feel free to reach out for collaborations or inquiries.</p>
                <p>Email me: <a href="mailto:awaisrafique4929@gmail.com" className={style.footerLink}>awaisrafique4929@gmail.com</a></p>
                <p>Phone/WhatsApp: <a href="tel:+923259350593" className={style.footerLink}>+92 325 9350593</a></p>
                <div className={style.socialButtonsContainer}>
                    {
                        socialLinks.map(link => (
                            <a
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={style.socialButton}
                            >
                                <i className={link.iconClass}></i>
                                <span className={style.iconText}>{link.name}</span>
                            </a>
                        ))}
                </div>

            </div>
        </div>
    </footer>
  )
}

export default Footer

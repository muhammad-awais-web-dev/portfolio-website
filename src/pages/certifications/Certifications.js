import React from 'react'
import styles from './Certifications.module.css'
import FeaturedCertifications from './FeaturedCertifications'
import OthersCertifications from './OthersCertifications'

function Certifications() {
  return (
    <>
        <section className={styles.CertificationsHeader}>
            <h1>My Certifications</h1>
            <p>A collection of my recent certifications showcasing my skills and knowledge in various domains.</p>
        </section>
        <FeaturedCertifications />
        <OthersCertifications />
    </>
  )
}

export default Certifications

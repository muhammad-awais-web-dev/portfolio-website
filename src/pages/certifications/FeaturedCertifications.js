import React from 'react'
import styles from './FeaturedCertifications.module.css'
import CertificationsList from '../../components/CertificationsList'

function FeaturedCertifications() {
  return (
    <section className={styles.featuredCertifications}>
        <h2 className={styles.sectionTitle}>Featured Certifications</h2>
        <p>Here are some of my recent Certifications and creative solutions:</p>
        <div className={styles.projectContainer}>
            <CertificationsList showFeaturedOnly={true}/>
        </div>
    </section>
  )
}

export default FeaturedCertifications

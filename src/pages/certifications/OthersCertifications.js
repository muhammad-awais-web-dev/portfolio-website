import React from 'react'
import styles from './OthersCertifications.module.css'
import CertificationsList from '../../components/CertificationsList'

function OthersCertifications() {
  return (
    <section className={styles.othersCertifications}>
        <h2 className={styles.sectionTitle}>Other Certifications</h2>
        <div className={styles.projectContainer}>
            <CertificationsList showOthersOnly={true}/>
        </div>
    </section>
  )
}

export default OthersCertifications

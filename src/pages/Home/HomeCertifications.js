import React from 'react'
import CertificationsList from '../../components/CertificationsList';
import Styles from './HomeCertifications.module.css';

function HomeCertifications() {
  return (
    <section id="certifications" className={Styles.homeCertifications}>
      <h2 className={Styles.sectionTitle}>Certifications</h2>
      <CertificationsList showFeaturedOnly={true} />
    </section>
  )
}

export default HomeCertifications

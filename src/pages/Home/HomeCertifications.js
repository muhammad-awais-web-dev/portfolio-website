import React from 'react'
import CertificationsList from '../../components/CertificationsList';
import Styles from './HomeCertifications.module.css';

function HomeCertifications() {
  return (
    <section id="certifications" className={Styles.homeCertifications}>
      <h2 className={Styles.sectionTitle}>Certifications</h2>
      <CertificationsList showFeaturedOnly={true} />
      <a href="/certifications" className={Styles.viewAllButton}>View All Certifications <i className="fa-solid fa-arrow-right"></i></a>
    </section>
  )
}

export default HomeCertifications

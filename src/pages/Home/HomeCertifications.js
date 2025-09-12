import React from 'react'
import CertificationsList from '../../components/CertificationsList';
import Styles from './HomeCertifications.module.css';
import { Link } from 'react-router-dom';

function HomeCertifications() {
  return (
    <section id="certifications" className={Styles.homeCertifications}>
      <h2 className={Styles.sectionTitle}>Certifications</h2>
      <CertificationsList showFeaturedOnly={true} />
      <Link to="/certifications" className={Styles.viewAllButton}>View All Certifications <i className="fa-solid fa-arrow-right"></i></Link>
    </section>
  )
}

export default HomeCertifications

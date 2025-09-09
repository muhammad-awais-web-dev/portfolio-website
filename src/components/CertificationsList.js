import React from 'react';
import styles from './CertificationsList.module.css';
import CertificationL from './CertificationL';
import CertificationsData from '../data/CertificationsData';

const CertificationsList = ({ 
  showFeaturedOnly = false, 
  showOthersOnly = false,
  showProfessionalOnly = false 
}) => {
  // Filter certifications based on various criteria
  let certificationsToShow = CertificationsData;
  
  if (showFeaturedOnly) {
    certificationsToShow = CertificationsData.filter(cert => cert.featured);
  } else if (showOthersOnly) {
    certificationsToShow = CertificationsData.filter(cert => !cert.featured);
  } else if (showProfessionalOnly) {
    certificationsToShow = CertificationsData.filter(cert => cert.professional);
  }

  return (
    <div className={styles.certificationsContainer}>
      {certificationsToShow.map((certification, index) => (
        <CertificationL
          key={index}
          title={certification.title}
          issuer={certification.issuer}
          image={certification.image}
          professional={certification.professional}
          partof={certification.partof}
          verifications={certification.verifications}
        />
      ))}
    </div>
  );
};

export default CertificationsList;

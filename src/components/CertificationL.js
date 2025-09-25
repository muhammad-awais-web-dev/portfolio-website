import React from 'react';
import styles from './CertificationL.module.css';

const CertificationL = ({ 
  title,
  issuer,
  image,
  professional,
  specialization,
  partof,
  verifications
}) => {
  return (
    <div className={styles.certificationCard}>
      <img 
        className={styles.certificationImage} 
        src={image} 
        alt={title}
      />
      <div className={styles.certificationContent}>
        <div className={styles.certificationInfo}>
          <div className={styles.certificationHeader}>
            {(professional || specialization) && (
              <span className={styles.professionalBadge}>{professional ? "Professional Certificate" : "Specialization"}</span>
            )}
            {!specialization && !professional && partof && (
              <p className={styles.certificationPartOf}>
                Part of: {partof}
              </p>
            )}
            <h3 className={styles.certificationTitle}>{title}</h3>
            <span className={styles.certificationIssuer}>{issuer}</span>
          </div>
        </div>
        <div className={styles.verificationsContainer}>
          {verifications.map((verification, index) => (
            <a 
              key={index} 
              href={verification.ref} 
              className={styles.verificationButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              {verification.text} <i className="fa-solid fa-external-link"></i>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificationL;

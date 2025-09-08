import React from 'react';
import styles from './ProjectL.module.css';

const ProjectL = ({ 
  image,
  category,
  title,
  description,
  tags,
  buttons
}) => {
  return (
    <div className={styles.projectCard}>
      <img 
        className={styles.projectImage} 
        src={image} 
        alt={title}
      />
      <div className={styles.projectContent}>
        <div className={styles.projectInfo}>
            <span className={styles.projectCategory}>{category}</span>
            <h3 className={styles.projectTitle}>{title}</h3>
            <p className={styles.projectDescription}>{description}</p>
        </div>
        <div className={styles.tagsContainer}>
          {tags.map((tag, index) => (
            <div key={index} className={styles.tag}>
              <div className={styles.tagText}>{tag}</div>
            </div>
          ))}
        </div>
        <div className={styles.buttons}>
          {buttons.map((button, index) => (
            <a key={index} href={button.ref} className={styles.buttonText}>
              {button.text} <i className={button.icon_Class}></i>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectL;
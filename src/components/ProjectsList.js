import React from 'react';
import styles from './ProjectsList.module.css';
import ProjectL from './ProjectL';
import projectsData from '../data/projectsData';

const ProjectsList = ({ showFeaturedOnly = false, showOthersOnly = false }) => {
  let projectsToShow = projectsData;

  if (showFeaturedOnly) {
    projectsToShow = projectsData.filter(project => project.featured);
  } else if (showOthersOnly) {
    projectsToShow = projectsData.filter(project => !project.featured);
  }

  return (
    <div className={styles.projectsContainer}>
      {projectsToShow.map((project) => (
        <ProjectL
          key={project.id}
          image={project.image}
          category={project.category}
          title={project.title}
          description={project.description}
          tags={project.tags}
          buttons={project.buttons}
        />
      ))}
    </div>
  );
};

export default ProjectsList;

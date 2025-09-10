import React from 'react'
import styles from './FeaturedProjects.module.css'
import ProjectsList from '../../components/ProjectsList'

function FeaturedProjects() {
  return (
    <section className={styles.featuredProjects}>
        <h2 className={styles.sectionTitle}>Featured Projects</h2>
        <p>Here are some of my recent projects and creative solutions:</p>
        <div className={styles.projectContainer}>
            <ProjectsList showFeaturedOnly={true}/>
        </div>
    </section>
  )
}

export default FeaturedProjects

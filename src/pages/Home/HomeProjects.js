import React from 'react'
import styles from './HomeProjects.module.css'
import ProjectsList from '../../components/ProjectsList'

function HomeProjects() {
  return (
    <section className={styles.homeProjects}>
        <h2 className={styles.sectionTitle}>Projects</h2>
        <p>Here are some of my recent projects and creative solutions:</p>
        <div className={styles.projectContainer}>
            <ProjectsList showFeaturedOnly={true}/>
        </div>
        <a href="/projects" className={styles.viewAllButton}>View All Projects <i className="fa-solid fa-arrow-right"></i></a>
    </section>
  )
}

export default HomeProjects

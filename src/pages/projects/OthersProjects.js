import React from 'react'
import styles from './OthersProjects.module.css'
import ProjectsList from '../../components/ProjectsList'

function OthersProjects() {
  return (
    <section className={styles.othersProjects}>
        <h2 className={styles.sectionTitle}>Other Projects</h2>
        <div className={styles.projectContainer}>
            <ProjectsList showOthersOnly={true}/>
        </div>
    </section>
  )
}

export default OthersProjects

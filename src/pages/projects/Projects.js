import React from 'react'
import FeaturedProjects from './FeaturedProjects'
import styles from './Projects.module.css'
import OthersProjects from './OthersProjects'

function Projects() {
  return (
    <>
        <section className={styles.projectsHeader}>
            <h1>My Projects</h1>
            <p>A collection of my recent work showcasing web development, UI/UX design, and creative solutions for real-world challenges.</p>
        </section>
        <FeaturedProjects />
        <OthersProjects />
    </>
  )
}

export default Projects

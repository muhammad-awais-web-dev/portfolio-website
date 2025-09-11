import React from 'react'
import styles from './Services.module.css'
import ServicesData from '../../data/ServicesData'
import Service from './Service'

function Services() {
  return (
    <>
      <section className={styles.servicesSection}>
        <h1>Services I Provide</h1>
        <p className={styles.servicesDescription}>Comprehensive UX design and development services combining Google-certified design methodology with modern development practices to create exceptional digital experiences.</p>
      </section>
      <section className={styles.servicesSection}>
        <div className={styles.servicesContainer}>
            {ServicesData.map((service, index) => (
              <Service key={index} service={service} />
            ))}
        </div>
      </section>
    </>
  )
}

export default Services

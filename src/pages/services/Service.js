import React from 'react'
import styles from './Service.module.css'

function Service( { service } ) {
  return (
    <article className={styles.service}>
      <div className={styles.serviceIcon}>
        <p className={styles.mainIcon}><i className={service.mainIcon}></i></p>
        {service.subIcon === 'Nil' ? null : <p className={styles.subIcon}><i className={service.subIcon}></i></p>}
      </div>
      <div className={styles.serviceContent}>
        <h3 className={styles.serviceTitle}>{service.title}</h3>
        <p className={styles.serviceDesc}>{service.desc}</p>
        <ul>
          {service.incl.map((item, index) => (
            <li key={index}><i className='fa-solid fa-circle-check'></i> {item}</li>
          ))}
        </ul>
        <span className={`${styles.servicePrice} + ${styles.servicePrice}`}>{service.price}</span>
      </div>
    </article>
  )
}

export default Service

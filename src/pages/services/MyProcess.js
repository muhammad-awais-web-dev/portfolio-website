import React from 'react'
import styles from './MyProcess.module.css'

const ProcessSteps = [{
    step: 1,
    title: "Discovery & Research",
    description: "Understanding your business, target audience, and project goals through comprehensive research and analysis."
  },
  {
    step: 2,
    title: "Strategy & Planning",
    description: "Defining the project scope, creating user personas, and developing a strategic plan to guide the design process."
  },
  {
    step: 3,
    title: "Design & Prototyping",
    description: "Creating wireframes, mockups, and interactive prototypes to visualize the user experience and gather feedback."
  },
  {
    step: 4,
    title: "Development & Implementation",
    description: "Building the final product using the latest technologies and best practices."
  },
  {
    step: 5,
    title: "Testing & Launch",
    description: "Conducting thorough testing to ensure quality and performance before the official launch."
  },
  {
    step: 6,
    title: "Post-Launch Support & Optimization",
    description: "Providing ongoing support, monitoring performance, and making necessary optimizations to ensure continued success."
  }
]



function MyProcess() {
  return (
    <section className={styles.myProcess}>
      <h2 className={styles.title}>My Process</h2>
      <p className={styles.description}>A systematic approach to ensure your project's success</p>
      <div className={styles.stepsContainer}>
        {ProcessSteps.map((step) => (
          <div key={step.step} className={styles.step}>
            <div className={styles.stepHeader}>
              <span className={styles.stepNumber}>{step.step}</span>
            </div>
            <h3 className={styles.stepTitle}>{step.title}</h3>
            <p className={styles.stepDescription}>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default MyProcess


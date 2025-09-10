import React from 'react'
import styles from './About.module.css'
import Skills from '../../data/Skills'
import Skill from './Skill'
import Technologies from '../../data/Technologies'

function About() {
  return (
    <>
        <section className={styles.HeroSection}>
            <h1 className={styles.title}>About Muhammad Awais</h1>
            <p className={styles.description}>A Google-certified UX designer and front-end developer dedicated to creating exceptional digital experiences that solve real problems through user-centered design and modern development.</p>
        </section>
        <section className={styles.Details}>
            <div className={styles.Journey} >
                <h2 className={styles.subtitle}>My Journey</h2>
                <p>I'm Muhammad Awais, a Google-certified UX designer and front-end developer with over an years of experience creating digital solutions that prioritize both user needs and business objectives. My journey bridges the gap between thoughtful design and technical excellence.</p>
                <p>Specializing in React.js development and comprehensive UX design methodologies, I've completed Google's intensive UX Design Professional Certificate program, mastering everything from user research and wireframing to high-fidelity prototyping in Figma. This foundation in design thinking complements my technical skills perfectly.</p>
                <p>When I'm not designing user flows or writing code, you'll find me exploring the latest design trends, contributing to open-source projects, or mentoring aspiring developers and designers. I believe in continuous learning and the power of community collaboration in this rapidly evolving field.</p>
            </div>
            <div className={styles.whatIBring} >
                <h2 className={styles.subtitle} >What I Bring</h2>
                <div className={styles.Benifit} >
                    <i className='fa-solid fa-users' ></i>
                    <div className={styles.BenifitContent} >
                        <h3 className={styles.BenifitTitle} >User-Centered Design</h3>
                        <p>Every decision starts with understanding user needs, validated through research and testing for optimal experiences.</p>
                    </div>
                </div>
                <div className={styles.Benifit} >
                    <i className='fa-solid fa-bolt' ></i>
                    <div className={styles.BenifitContent} >
                        <h3 className={styles.BenifitTitle} >Performance & Accessibility</h3>
                        <p>I build fast, accessible solutions that work beautifully for everyone, regardless of their abilities or device.</p>
                    </div>
                </div>
                <div className={styles.Benifit} >
                    <i className='fa-solid fa-palette' ></i>
                    <div className={styles.BenifitContent} >
                        <h3 className={styles.BenifitTitle} >Design-Development Bridge</h3>
                        <p>Unique ability to think like a designer and build like a developer, ensuring seamless project execution.</p>
                    </div>
                </div>
            </div>
        </section>
        <section className={styles.Skills} >
            <h2 className={styles.subtitle} >Skills & Tools</h2>
            <div className={styles.SkillsList} >
                {Skills.map(skill => (
                    <Skill key={skill.id} skill={skill} />
                ))}
            </div>
        </section>
        <section className={styles.technologies} >
            <h2 className={styles.subtitle} >Technologies I Work With</h2>
            <div className={styles.techList} >
                {Technologies.map(tech => (
                    <div key={tech.id} className={styles.techCard} >
                        <p className={styles.techName} >{tech.name}</p>
                    </div>
                ))}
            </div>
        </section>
    </>
  )
}

export default About

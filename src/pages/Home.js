import React from 'react'
import Styles from "./Home.module.css"
import { Link } from 'react-router-dom'

const CV = process.env.PUBLIC_URL + '/assets/CV.pdf';

function Home() {
  return (
    <section className={Styles.heroSection}>
      <div className={Styles.containers}>
        <p className={Styles.badge}>Available for Projects</p>
        <h1 className={Styles.name}>Muhammad<br />Awais</h1>
        <h2 className={Styles.title} >UX Designer & Front-End Developer</h2>
        <p className={Styles.desc} >Crafting exceptional digital experiences through user-centered design and modern development. Google-certified UX designer with expertise in React.js, creating solutions that are both beautiful and functionally robust.</p>
        <div className={Styles.buttons} >
          <Link className={Styles.links}  to="/projects">View Projects <i className="fa-solid fa-arrow-right"></i> </Link>
          <a className={Styles.links}  href={CV} download>Download CV</a>
        </div>
      </div>
      <div className={Styles.containers}>
        <div className={Styles.card}>
          <img className={Styles.profilePic} src={process.env.PUBLIC_URL + '/assets/Profile_pic.webp'} alt="Awais" />
          <h3>Muhammad Awais</h3>
          <p>UX Designer & Front-End Developer</p>
          <div className={Styles.stats}>
            <div className={Styles.stat}>
              <h4>1+</h4>
              <p>Years of Experience</p>
            </div>
            <div className={Styles.stat}>
              <h4>10+</h4>
              <p>Projects Completed</p>
            </div>
            <div className={Styles.stat}>
              <h4>15+</h4>
              <p>Satisfied Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home

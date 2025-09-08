import React from 'react'
import Styles from './HomeAbout.module.css';
import { Link } from 'react-router-dom';

function HomeAbout() {
  return (
    <section className={Styles.homeAbout}>
      <h2>About</h2>
      <p>I'm a Google-certified UX designer and front-end developer passionate about creating digital experiences that solve real problems beautifully. Combining comprehensive design thinking with technical expertise in React.js and modern web technologies, I bridge the gap between user needs and business objectives to deliver impactful solutions.</p>
      <Link to="/about">Learn more about me <i className='fa-solid fa-arrow-right' ></i></Link>
    </section>
  )
}

export default HomeAbout

import React from 'react'
import styles from './Skill.module.css'

function Skill({ skill }) {
  return (
    <div className={styles.SkillCard} >
      <div className={styles.SkillInfo} >
        <h3>{skill.name}</h3>
        <i className={skill.icon_Class}></i>
      </div>
      <div className={styles.ProficiencyBar} >
        <div className={styles.ProficiencyFill} style={{ width: `${skill.proficiency}%` }} ></div>
      </div>
        <span className={styles.ProficiencyText} >{skill.proficiency}% Proficient</span>
    </div>
  )
}

export default Skill

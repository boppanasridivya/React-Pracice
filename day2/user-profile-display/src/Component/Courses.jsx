import React from 'react'
import styles from "./UserProfile.module.css"

const Courses = ({Title1,Title2,Eligibility,Duration}) => {
  return (
    <div className={styles.courses}>
      <h2>Full Time Courses</h2>
      <ol>
        <li>
          {Title1}
          <ul>
            <li>Eligibility : {Eligibility}</li>
            <li>Duration ;{Duration}</li>
          </ul>
        </li>
      </ol>
      <h2>Part Time Courses</h2>
      <ol>
        <li>
          {Title1}
          <ul>
            <li>Eligibility : {Eligibility}</li>
            <li>Duration ;{Duration}</li>
          </ul>
        </li>
        <li>
          {Title2}
          <ul>
            <li>Eligibility : {Eligibility}</li>
            <li>Duration ;{Duration}</li>
          </ul>
        </li>

      </ol>
    </div>
  )
}

export default Courses

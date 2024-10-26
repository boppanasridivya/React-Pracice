import React from 'react'
import Quantity from './Quantity'
import styles from "./CartPage.module.css"

const LabelPrice = ({name, price}) => {
  return (
    <div className={styles.label}>
        <p>{name}:{price}</p>
        
    </div>
  )
}

export default LabelPrice

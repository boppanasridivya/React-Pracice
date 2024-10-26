import React, { useState } from 'react'
import styles from "./CartPage.module.css"

const Quantity = ({quantity, handleClick,id}) => {
    const[count,setCount]=useState(quantity);
    const handleIncrease =() =>{
        setCount(count+1);
        console.log( setCount(count+1));
    }
    const handleDecrease =() =>{
        setCount(count-1)
    }
  return (
    <div className={styles.buttonqty}>
      <button onClick={()=>{handleClick(id,-1)}}>-</button>
      <p>{quantity}</p>
      <button onClick={()=>{handleClick(id,+1)}}>+</button>
    </div>
  )
}

export default Quantity

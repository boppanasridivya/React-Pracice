import React from 'react'
import LabelPrice from './LabelPrice'
import Quantity from './Quantity'
import styles from "./CartPage.module.css"

const CartItem = ({id,name,price,quantity,handleClick}) => {
  return (
    <div className={styles.myCart}>
      <LabelPrice name={name} price={price}/>
      <Quantity quantity={quantity} handleClick={handleClick} id={id}/>
    </div>
  )
}

export default CartItem

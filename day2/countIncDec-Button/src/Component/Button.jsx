import React from 'react'

const Button = ({increment, decrement,count}) => {
  return (
    <>
    <button onClick = {increment}>+</button>
     <p>{count}</p>
    <button onClick = {decrement}>-</button>
    </>

  )
  
}

export default Button

import React from 'react'

const Button = ({decrement, increment,double}) => {
  return (
    <div>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
      <button onClick={double}>Double</button>

    </div>
  )
}

export default Button

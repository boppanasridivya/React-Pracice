import React from 'react'

const Button = (props) => {
    const{click, count} = props;
  return (
    <button onClick={click}>
     click {count}
    </button>
  )
}

export default Button

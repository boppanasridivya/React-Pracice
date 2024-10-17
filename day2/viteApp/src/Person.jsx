import React from 'react'

export const Person = (props) => {
const {name , age}= props;

  return (
    <div>
      <h3>{name}</h3>
      <p>{age}</p>
    </div>
  )
}



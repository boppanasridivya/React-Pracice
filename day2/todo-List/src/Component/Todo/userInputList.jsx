import React from 'react'

const userAddList = ({text, handleChange,handleAdd}) => {
  return (
    <div>
       <input type = "text" onChange = {handleChange} placeholder="add your task" value = {text}/>
       <button onClick={handleAdd}>Add</button>
    </div>
  )
}

export default userAddList

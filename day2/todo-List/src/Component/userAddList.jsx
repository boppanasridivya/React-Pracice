import React from 'react'

const userAddList = () => {
  return (
    <div>
       <input type = "text" onChange = {handleChange} placeholder="add your task" value = {text}/>
       <button onClick={handleAdd}>Add</button>
    </div>
  )
}

export default userAddList

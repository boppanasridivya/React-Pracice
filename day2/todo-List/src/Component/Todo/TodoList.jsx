import React from 'react'

const TodoList = ({add, handleToggle}) => {
  return (
    <div>
         <ul>
        {add.map((item) => {

            const{title, status, id} = item;
                return(
                    <li key ={item.id}> 
                       { title} - {status ? "Completed" : "Not Completed"}
                       <button onClick ={()=>handleToggle(id)}>Toggle</button>

                    </li>
                )
          } )
    }
    </ul>
    </div>
  )
}

export default TodoList

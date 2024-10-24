import React, { useState } from 'react'
import TodoList from './TodoList';
import styles from "./Todo.module.css";


const Todo = () => {
    const[text, setText] = useState("");
    const[add, setAdd] = useState([]);

    const handleChange = (event) => {

        setText(event.target.value);

    }

    const handleAdd = () => {
        const newItem = {
            title : text,
            status : true,
          
            id : Date.now() +Math.random(),
        }
const addTodo= [...add, newItem];

// here we are copying the add total data into ...add by using spread operator after we are creating new item tp continue
    setAdd(addTodo);
    setText("");

    }
    function handleToggle (id) {
     const todoAfterUpdation = add.map((item) => {
       return(
        item.id === id ? {...item, status: !item.status} : item
       )
     })
     setAdd(todoAfterUpdation);

    }

    console.log("text", text);
    console.log("add", add);
  return (
    <div>
        <h1>To-Do List activity</h1>
      
       <div>
       <input type = "text" onChange = {handleChange} placeholder="add your task" value = {text}/>
       <button onClick={handleAdd}>Add</button>
       </div>
 
       <TodoList add= {add} handleToggle={handleToggle}/>
       
    </div>
    
  )
}

export default Todo

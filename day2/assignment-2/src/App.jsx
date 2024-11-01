import React, { useState } from 'react'
import Button from './Component/Button'

const App = () => {
  const[count, setCount] = useState(0)
  const increment=() =>{
    setCount(count+1);
  }
  const decrement= ()=>{
    if(count>0){
      setCount(count-1);
    }
  }
  const double=() =>{
     let updatedCount=(count*2);
     setCount(updatedCount);
  }
  return (
    <div>
      <h2>Count : {count}</h2>
      <Button increment={increment} decrement={decrement} double={double}/>
    </div>
  )
}

export default App

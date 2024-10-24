import React, { useState } from 'react'
import Button from './Component/Button';

const App = () => {
 
  const[count, setCount] = useState(0);

const handleIncrease=() =>{
  
    setCount (count+1);
  
  
   console.log(setCount);

}
const handleDecrease =() =>{
  if(count>0){
   setCount(count-1);
  }
}
  


  return (
  <>
  <Button increment={handleIncrease} decrement={handleDecrease} count={count}/>
 
  </>
  )
}

export default App

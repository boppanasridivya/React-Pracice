import React, { useState } from 'react'
import Timer from './Timer';

const App = () => {
  const[showTimer, setShowTimer]=useState(true);
  const show =() =>{
    setShowTimer(!showTimer);
  }
  return (
    
    <div>
    {showTimer && <Timer/>}
    <button onClick={show}>{showTimer? "Show" : "Hide"}</button>
    </div>
  )
}

export default App

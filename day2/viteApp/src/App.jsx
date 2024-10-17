import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

import data from "./data";
import {List} from "./List"

function App() {
  
  return (
    <main>
      <section>
        <h3>{data.length} birthday's today</h3>
        <List people={data} />
      </section>
    </main>
   
      
  )
}

export default App

// import React, { useState } from 'react'
// // import Button from './Component/Button';

// const App = () => {
//   const[count, setCount] = useState(0);

//   function handleClick(){
//     setCount(count+1);
//   }
//   return (
    
//     <button onClick= {handleClick}>
//       count : {count}
//     </button>
     
//   )
// }

// export default App
//

//******************************Update screen with button example****************88888888888888888 */

// import React ,{ useState } from 'react'

// export default function App(){
//   return (
//     <div>
//       <h1>The use state example</h1>
//       <Button />
//       <Button />
//     </div>
//   );
// }



// function Button(){
 
//   const [count, setCount] = useState(0);
//   function handleClick(){
//      setCount(count+1);
//   }
//   return <button onClick = {handleClick}>click {count}</button>
// }

//*******************3rd case ************************* */

// import React, { useState } from 'react'
// import Button from './Component/Button';

// const App = () => {

// const[count, setCount] =useState(0);
// function handleClick(){
//    setCount(count+1);
// }
//   return (
//     <div>
//       <h1>Count : {count}</h1>
//       <Button click={handleClick}/>
//       <Button click={handleClick}/>
//     </div>
//   )
// }

// export default App


//********************2 buttons eworking together *********** */

// import React ,{ useState } from 'react'

// export default function App(){
//   const [count, setCount] = useState(0);

//   function handleClick(){
//     setCount(count+1);
//  }

//   return (
//     <div>
//       <h1>The use state example</h1>
//       <Button count ={count} click={handleClick}/>
//       <Button count = {count} click={handleClick}/>
//     </div>
//   );
// }



// function Button({count, click}){
 
  
  
//   return <button onClick = {click}>click {count}</button>
// }

//------------------------we can write above one like this as well ------------------------------------//
import React, { useState } from 'react'
import Button from './Component/Button';

const App = () => {

  const[count, setCount] = useState(0);
  function handleClick(){
    setCount(count+1);
  }

  return (
    <div>
      <Button click ={handleClick} count = {count}/>
      <Button click ={handleClick} count = {count}/>
    </div>
  )
}

export default App

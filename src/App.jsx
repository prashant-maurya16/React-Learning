import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setcounter] = useState(5)
 //let counter = 5;
 const addValue = ()=>{
counter= counter+1;
  setcounter(counter)
  console.log("clicked",counter);

 } 


 const removeValue = ()=>{

 setcounter(counter-1);
 }

  return (
    <>
     <h1>   Counter Project</h1>
     <h2>counter value:{counter}</h2>
     <button  
     onClick={addValue}
     
     >Add value</button>
     <br /> <br />
     <button 
     onClick={removeValue}
     >Remove value</button>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
<<<<<<< HEAD

  let [counter, setcounter] = useState(1)
 

  const addValue = () =>{

    if(counter<20)
    {

      setcounter(counter+1);
    }
    else{
   let stop =console.log("counter stopped")
   alert("Maximum range is 20");
   
    }
  }

  const reduceValue = () =>{

    if(counter>1)
    {
      setcounter(counter-1);
    }
    else{
      alert("Minimum range is 0")
    }
  }
  
 

  return (
    <>
    <h1>counter with limit</h1>
    <h2>counter number:{counter}</h2>
    
    <button
    onClick={addValue}
    
    >Increase count</button>
    <br /><br />
    <button 
    onClick={reduceValue}
    
    >Decrease count</button>
     
=======
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
>>>>>>> 3c118fba24c6e69078c1aa3ec48b970f9f2e8105
    </>
  )
}

export default App

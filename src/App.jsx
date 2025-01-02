import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

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
     
    </>
  )
}

export default App

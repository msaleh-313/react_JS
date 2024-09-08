import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
let [counter,setCounter]=useState(15)

// let counter=5

// function addValue(){
//   console.log("value added",Math.random())
// }
                
// Arrow Function Implementation
const addValue=()=>{
  // console.log("Clicked",counter=counter+1 )
  if(counter<20){
    setCounter(counter+1)  
  }
}
const removeValue=()=>{
  // console.log("Value decremented",counter=counter-1)
  if(counter>0){
    setCounter(counter-1)  
  }
}



  return (
    <>
     <h1>chai or react</h1>
     <h2>Counter Value: {counter}</h2>
     <button onClick={addValue} >Add Value {counter}</button>
     <br/>
     <button onClick={removeValue}>Remove Value {counter}</button>
    </>
  )
}

export default App

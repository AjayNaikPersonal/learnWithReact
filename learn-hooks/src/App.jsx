import { useState } from 'react'
import './App.css'
import Hooks from './components/Hooks';

function App() {
  const [counter, setCounter] = useState(10);
  const addValue = ()=>{
    //here i will be updating my counter
    if(counter + 1  <= 20){
      setCounter(counter+1);
    }
  }

  const removeValue = () =>{
    //reduce my counter
    if(counter - 1  >= 0){
      setCounter(counter-1);
    }
  }

  return (
    <>
      <h1>my counter is  {counter}</h1>
      <button onClick={addValue}>add </button>
      <br/>
      <button onClick={removeValue}>remove</button>
      <Hooks counter = {counter}/>
    </>
  )
}

export default App

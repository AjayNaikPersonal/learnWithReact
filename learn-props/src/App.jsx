import { useState } from 'react'
import './App.css'
import Cards from './components/cards'

function App() {
  const myobj = {
    name:"Ajay",
    age:60,
  }
  let age = 30;

  return (
    <>
      <h1 className="text-3xl font-bold bg-red-600 p-5 rounded-xl text-white">
        Hello world!
      </h1>

      {/* <Cards name="ajay" age={age}/> */}
      <Cards name="Rahul" age={49} />
    </>
  )
}

export default App

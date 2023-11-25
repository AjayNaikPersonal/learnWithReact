import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="container mx-auto px-4 w-full h-screen"
    style={{backgroundColor: color }}>
      <div className="btn-container flex flex-wrap justify-center text-white p-4 gap-4">
          <div className="button bg-red-800 text-white px-3 py-1 rounded cursor-pointer" onClick={()=>setColor("red")}>
            red
          </div>
          <div className="button bg-green-800 text-white px-3 py-1 rounded cursor-pointer" onClick={()=>setColor("green")}>
            green
          </div>
          <div className="button bg-yellow-500 text-white px-3 py-1 rounded cursor-pointer" onClick={()=>setColor("yellow")}>
            yellow
          </div>
          <div className="button bg-gray-100 text-black px-3 py-1 rounded cursor-pointer" onClick={()=>setColor("white")}>
            white
          </div>
      </div>
    </div>
  )
}

export default App

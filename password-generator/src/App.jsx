import { useState,useCallback,useEffect } from 'react'

function App() {
  const [password, setPassword] = useState("")
  const [length, setLength] = useState(0)
  const [isNumber, setIsNumber] = useState(false)
  const [isChar, setIsChar] = useState(false)

  const passwordGenerator = useCallback(
    () => {
      document.getElementById("copied").innerText = ""
      let pass = "";
      let str = "";
      str += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      if(isNumber) str += "0123456789";
      if(isChar) str += "!@#$%^&*()-=_+[]{}|;:'`~";

      for (let i = 0; i < length; i++) {
        const charIndex = Math.floor(Math.random() * str.length + 1);
        pass += str.charAt(charIndex);        
      }
      setPassword(pass)
      
    },
    [length, isNumber,isChar]
  )
  
  const copyTextToClip = () =>{
    window.navigator.clipboard.writeText(password);
    document.getElementById("copied").innerText = "copied!!!"
  }

  useEffect(() => {
    passwordGenerator()
    return () => {
      
    }
  }, [length, isNumber,isChar])
  
  
  return (
    <>
      <h1 className='text-white text-center text-4xl'>Password Generator </h1>

      <div className="password-container max-w-xl rounded-xl bg-gray-500 flex flex-wrap justify-center items-center p-4 mx-auto my-auto my-4">
      <div className="input-tag bg-purple-400 flex flex-wrap gap-3 p-5 mt-5 rounded-xl w-full">
        <input
          type="text"
          name=""
          id=""
          value={password}
          className="text-sm w-full p-2 rounded"
        />
        <button className="bg-blue-400 px-2 py-1 rounded text-white" onClick = {copyTextToClip}>copy</button>
        <span id="copied" className='text-blue-900'></span>
      </div>
        <div className="features bg-green-400 flex flex-wrap gap-3 p-5 mt-5 rounded-xl">
            <div className="slider">
              <input type="range" name="range" id="" onChange={(e) => setLength(e.target.value)}/>Length({length})
            </div>
          <div className="number-check">
            <input type="checkbox" name="character" onChange={() => setIsNumber(prev => !prev)}/> Numbers
          </div>
          <div className="char-check">
            <input type="checkbox" name="character" onChange={() => setIsChar(prev => !prev)}/> Characters
          </div>
        </div>
      </div>
    </>
  )
}

export default App

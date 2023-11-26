import { useState , useEffect} from 'react'
import InputBox from './components/inputBox'



function App() {
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [fromAmount, setFromAmount] = useState(0)
  const [toAmount, setToAmount] = useState(0)
  const [currencyOptions, setCurrencyOptions] = useState([])
  const [data, setData] = useState({})

  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}.json`)
    .then((res) => res.json())
    .then((res) => {
      const keys = Object.keys(res[from]);
      setCurrencyOptions(keys)
      setData(res[from])
    })
  }, [from])

  const calculateResult = () =>{
    const result = (data[to] * fromAmount).toFixed(6);
    setToAmount(result)
  }

  const swap = () =>{
    setFromAmount(toAmount)
    setToAmount(fromAmount)
  }
  
  return (
    <>
      <h1 className="text-4xl text-center text font-bold py-4">Currency Calculator</h1>
      <div className="input-boxes">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-gray-400 ">
          <div className="w-full mb-1">
            <InputBox label="from"  options = {currencyOptions} obj = {data}
              className="p-3"
              amount = {fromAmount}
              currency = {from}
              onAmountChange={(amount) => setFromAmount(amount)}
              onCurrencyChange={(currency) => setFrom(currency)}
            />
            <button className='bg-blue-500 p-3 m-2 text-gray-100 rounded mx-auto flex justify-center' onClick={swap}>swap</button>
            <InputBox label="to" options = {currencyOptions} obj = {data}
              amount = {toAmount}
              currency = {to}
              onAmountChange={(amount) => setToAmount(amount)}
              onCurrencyChange={(currency) => setTo(currency)}/>
          </div>
        </div>
      </div>
      <div className="bt">
        <button className="bg-blue-500 p-3 m-2 text-gray-100 rounded mx-auto flex justify-center"
        
        onClick={calculateResult}
        > convert {from} to {to}</button>
      </div>
    </>
  )
}

export default App

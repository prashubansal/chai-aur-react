import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // hooks
  const [counter, setCounter] = useState(15)

  // let counter = 15

  const addValue = function(){
    if(counter < 20){
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
    }
  }

  const removeValue = function(){
    if(counter > 0){
      setCounter(counter - 1)
    }
  }

  return (
   <>
    <h1>chai aur react</h1>
    <h2>Counter value: {counter}</h2>

    <button
    onClick={addValue}
    >Add value {counter}</button>
    <br />
    <button
    onClick={removeValue}
    >remove value {counter}</button>
    <p>footer: {counter}</p>
   </>
  )
}

export default App

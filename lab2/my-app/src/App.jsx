import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  var name = 'default';
  function handleClick(){
    console.log(name);
  }

  function handleChange(e){
    name= e.target.value;
  }

  return (
    <>
      <input id="a" type="text" />
      <br />
      <input id="b" type="text" />
      <br />
      <button onClick={handleClick}>Click</button>
      <br />
      <span>aaa</span>
    </>
  )
}

export default App

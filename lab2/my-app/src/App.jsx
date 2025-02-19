import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(null);

  function handleChange(e){
    let kq;
    if(e==="+"){
      kq=num1+num2;
    }
    

  }

  return (
    <>
    <div className='caculator'>
    <input id="a" type="text" placeholder='Nhập số thứ nhất'/>
      <br />
      <input id="b" type="text" placeholder='Nhập số thứ hai'/>
      
    </div>
    <div>
    <br />
      <button onClick={handleClick}>+</button>
      
      <button onClick={handleClick}>-</button>
      <br />
      <button onClick={handleClick}>*</button>
      
      <button onClick={handleClick}>/</button>
      <br />
    </div>

    </>
  )
}

export default App

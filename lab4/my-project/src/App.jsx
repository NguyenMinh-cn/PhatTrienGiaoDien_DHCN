import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Item from './assets/components/Item'
import Menu from './assets/components/Menu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Menu></Menu>
    </div>
      
    </>
  )
}

export default App

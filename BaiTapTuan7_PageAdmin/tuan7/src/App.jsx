import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
  <div className="container">
    <div className="header">
      <h2>Dashboard</h2>
    </div>
    <div className="menu">
      <a href="#">link1</a>
      <a href="#">link2</a>
      <a href="#">link3</a>
      <a href="#">link3</a>
      <img src="../src/assets/img/Group.png" alt="" />
    </div>
    <div className="content">
      <div style={{display:'flex', alignContent:'center'}}>
        <img src="../src/assets/img/Squares four 1.png" alt="" />
        <span>Overview</span>
        
      </div>
        <div className='overview'>
          <div className='supoverview'>
            <span>Turnover</span>
            <span>$92,405</span>
            <span>detail</span>
          </div>
          <div className='supoverview'>
            <span>Turnover</span>
            <span>$92,405</span>
            <span>detail</span>
          </div>
          <div className='supoverview'>
            <span>Turnover</span>
            <span>$92,405</span>
            <span>detail</span>
          </div>
        </div>
        <div style={{display:'flex', alignContent:'center'}}>
          <img src="../src/assets/img/File text 1.png" alt="" />
          <span>Detailed Report</span>
        </div>
        <div className="detail">
          <table width="100%">
            <tr>
              <th>CUSTOMER NAME</th>
              <th>COMPANY</th>
              <th>ORDER DATE</th>
              <th>STATUS</th>
            </tr>
            <tr>
              <td>row 1 col 1</td>
              <td>row 1 col 2</td>
              <td>row 1 col 3</td>
              <td>row 1 col 4</td>
            </tr>
            <tr>
              <td>row 2 col 1</td>
              <td>row 2 col 2</td>
              <td>row 2 col 3</td>
              <td>row 2 col 4</td>
            </tr>
          </table>
        </div>
 
    

    </div>
  
  </div>
      

    </>
  )
}

export default App

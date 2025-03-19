import { useState } from 'react';

function Header() {
    const [count, setCount] = useState(0)
  
    return (
      <>
      <div className='header'>
        <div>
          <a href="#">Trang chủ</a>
          <a href="#"> Thực đơn</a>
          <a href="#">Liên hệ</a>
        </div>
        
        <button>Book Table</button>
      </div>
        
      </>
    )
  }
  
  export default Header
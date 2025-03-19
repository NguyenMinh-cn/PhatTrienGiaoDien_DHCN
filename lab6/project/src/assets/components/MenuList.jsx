import { useState } from 'react';

function MenuList({ ten , gia, hinh, mota}) {
  const [arr, setArr] = useState([]);
    return (
      <>
      <div className="item">
      <p>{ten}</p>
      <p>{gia}</p>
      <p>{mota}</p>
      <img src={hinh} alt="null" />
        </div>
      </>
    )
  }
  
  export default MenuList
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './redux/counterSlice2'; // Sử dụng counterSlice2

const BT_redux_tookit = () => {
  const count = useSelector((state) => state.counter.count); // Lấy giá trị count từ Redux store
  const dispatch = useDispatch(); // Dùng dispatch để gửi action

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='text-center'>
      <h1 className=' p-5'>redux-toolkit</h1>
        <h1 className=' p-5'>{count}</h1>
        <div>
          <button onClick={() => dispatch(increment())} className='m-2 p-2 bg-blue-500 text-white rounded'>Tăng</button>
          <button onClick={() => dispatch(decrement())} className='m-2 p-2 bg-red-500 text-white rounded'>Giảm</button>
          
        </div>
      </div>
    </div>
  );
};

export default BT_redux_tookit;

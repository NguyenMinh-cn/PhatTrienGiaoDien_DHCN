import React, { useReducer } from 'react';

// Reducer
const counterReducer = (state, action) => {
  switch (action) {
    case 'INCREMENT': return { count: state.count + 1 };
    case 'DECREMENT': return { count: state.count - 1 };
    default: return state;
  }
};

const BTUseReducer = () => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div className='flex justify-center items-center h-screen p-5'>
      <div className='text-center'>
        <h1 className=' p-5'>useReducer</h1>
        <h1 className=' p-5'>{state.count}</h1>
        <div>
          <button onClick={() => dispatch('INCREMENT')} className='m-2 p-2 bg-blue-500 text-white rounded'>Tăng</button>
          <button onClick={() => dispatch('DECREMENT')} className='m-2 p-2 bg-red-500 text-white rounded'>Giảm</button>
          
        </div>
      </div>
    </div>
  );
};

export default BTUseReducer;

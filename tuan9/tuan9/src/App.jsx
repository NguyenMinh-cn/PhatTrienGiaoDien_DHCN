import React, { useReducer } from 'react';

// Reducer
const counterReducer = (state, action) => {
  switch (action) {
    case 'INCREMENT': return { count: state.count + 1 };
    case 'DECREMENT': return { count: state.count - 1 };
    default: return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='text-center'>
        <h2>{state.count}</h2>
        <div>
          <button onClick={() => dispatch('INCREMENT')} className='m-2 p-2 bg-blue-500 text-white rounded'>Tăng</button>
          <button onClick={() => dispatch('DECREMENT')} className='m-2 p-2 bg-red-500 text-white rounded'>Giảm</button>
          
        </div>
      </div>
    </div>
  );
};

export default App;

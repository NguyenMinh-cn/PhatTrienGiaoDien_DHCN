import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice2';  
import todoSlice from './todoSlice';

// Tạo Redux store
const store2 = configureStore({
  reducer: {
    todos: todoSlice         
  }
});

export default store2;

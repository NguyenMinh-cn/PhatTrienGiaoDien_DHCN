import { configureStore } from '@reduxjs/toolkit';
import todoSlice from './todoSlice';

const storeToDoList = configureStore({
  reducer: {
    todos: todoSlice  
  }
});

export default storeToDoList;  

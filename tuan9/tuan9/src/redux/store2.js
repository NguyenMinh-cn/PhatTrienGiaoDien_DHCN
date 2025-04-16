import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice2';  // Thay đổi đường dẫn đến counterSlice2

// Tạo Redux store
const store2 = configureStore({
  reducer: {
    counter: counterReducer
  }
});

export default store2;

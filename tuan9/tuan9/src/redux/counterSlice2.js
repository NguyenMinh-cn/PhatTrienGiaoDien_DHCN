import { createSlice } from '@reduxjs/toolkit';

// Tạo slice cho counter
const counterSlice2 = createSlice({
  name: 'counter',
  initialState: { count: 0 },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    
  }
});

// Xuất các action creators
export const { increment, decrement } = counterSlice2.actions;

// Xuất reducer để sử dụng trong store
export default counterSlice2.reducer;

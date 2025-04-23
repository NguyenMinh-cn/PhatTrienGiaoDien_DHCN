import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        increment: (state) => state + 1,
        decrement: (state) => state - 1,
        reset: () => 0, // Reset về 0
        incrementByAmount: (state, action) => state + action.payload, // Tăng theo số người dùng nhập
    },
});

export const { increment, decrement, reset, incrementByAmount } =
    counterSlice.actions;
export default counterSlice.reducer;

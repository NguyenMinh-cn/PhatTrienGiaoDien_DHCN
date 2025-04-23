import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './counterSlice';

// Tạo store với reducer
const store = configureStore({
    reducer: {
        count: counterSlice,
    },
});

export default store;

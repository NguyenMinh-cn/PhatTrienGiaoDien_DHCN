import { createStore } from 'redux';
import { counterReducer } from './counterSlice';

// Tạo store với reducer
const store = createStore(counterReducer);

export default store;

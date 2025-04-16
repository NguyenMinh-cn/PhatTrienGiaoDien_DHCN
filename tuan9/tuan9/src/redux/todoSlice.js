import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: [],  
  reducers: {
    addToDo: (state, action) => {
      state.push({ id: Date.now(), text: action.payload, completed: false });
    },
    toggleToDo: (state, action) => {
      const todo = state.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    removeToDo: (state, action) => {
      return state.filter(todo => todo.id !== action.payload);
    }
  }
});

export const { addToDo, toggleToDo, removeToDo } = todoSlice.actions;
export default todoSlice.reducer;

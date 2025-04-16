import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToDo, toggleToDo, removeToDo } from './redux/todoSlice';

const Todo_List = () => {
  const [newTodo, setNewTodo] = useState('');  // Lưu trữ công việc mới
  const todos = useSelector((state) => state.todos);  // Lấy todos từ Redux store
  const dispatch = useDispatch();  // Cấp quyền dispatch hành động

  if (!Array.isArray(todos)) {
    return <div>............</div>;
  }

  // Hàm thêm công việc mới
  const handleAdd = () => {
    if (newTodo.trim() !== '') {
      dispatch(addToDo(newTodo));  
      setNewTodo('');  
    }
  };

  // Hàm toggle trạng thái hoàn thành công việc
  const handleToggle = (id) => {
    dispatch(toggleToDo(id));  
  };

  // Hàm xóa công việc
  const handleRemove = (id) => {
    dispatch(removeToDo(id)); 
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-5 border rounded-lg shadow-md bg-white">
      <h1 className="text-3xl font-semibold text-center mb-5">To-Do List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}  
        className="w-full p-2 mb-4 border rounded"
        placeholder="Enter a new task"
      />
      <button
        onClick={handleAdd}  
        className="w-full p-2 mb-4 bg-blue-500 text-white rounded"
      >
        Add Task
      </button>

      <ul>
        {todos.map(todo => (
          <li
            key={todo.id}
            className="flex justify-between items-center p-2 mb-2 border rounded"
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={todo.completed}  // Dấu tick nếu hoàn thành
                onChange={() => handleToggle(todo.id)}  // Khi checkbox thay đổi, toggle trạng thái
                className="mr-2 checked:bg-green-400"
              />
              <span>
                {todo.text}
              </span>
            </div>
            <button
              onClick={() => handleRemove(todo.id)}  
              className="text-white bg-red-500"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo_List;

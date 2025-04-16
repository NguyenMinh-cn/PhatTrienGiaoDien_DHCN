import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';  
import Todo_List from './Todo_List';  
import storeToDoList from './redux/storeToDoList';  

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={storeToDoList}> 
      <Todo_List />
    </Provider>
  </StrictMode>
);

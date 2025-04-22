import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import Todo_List from './Todo_List';
import storeToDoList from './redux/storeToDoList';
import ToggleTheme from './ToggleTheme';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={storeToDoList}>
            <ToggleTheme />
        </Provider>
    </StrictMode>
);

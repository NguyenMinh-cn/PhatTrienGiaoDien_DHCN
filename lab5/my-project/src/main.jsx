import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import App_useState from './App_useState.jsx';
import App_useReducer from './App_useReducer.jsx';
import App_useMemo from './App_useMemo.jsx';
createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App_useMemo />
    </StrictMode>
);

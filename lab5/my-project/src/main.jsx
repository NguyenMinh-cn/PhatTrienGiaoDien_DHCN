import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import App_useState from './App_useState.jsx';
createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App_useState />
    </StrictMode>
);

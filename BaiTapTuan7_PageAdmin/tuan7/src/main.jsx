import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Dashboard from './components/Dashboard.jsx';
import Projects from './components/Projects.jsx';
import Teams from './components/Teams.jsx';
import Analytics from './components/Analytics.jsx';
import Messages from './components/Messages.jsx';
import Integrations from './components/Integrations.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
const router = createBrowserRouter([
    {
        path: '/dashboard',
        element: <Dashboard />,
    },
    {
        path: '/projects',
        element: <Projects />,
    },
    {
        path: '/teams',
        element: <Teams />,
    },
    {
        path: '/analytics',
        element: <Analytics />,
    },
    {
        path: '/messages',
        element: <Messages />,
    },
    {
        path: '/integrations',
        element: <Integrations />,
    },
]);
createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);

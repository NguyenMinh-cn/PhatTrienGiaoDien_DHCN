import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import UsersList from './features/users/UsersList';
import store from './redux/store';
import BT_redux from './BT_redux';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store}>
            <BT_redux />
        </Provider>
    </StrictMode>
);

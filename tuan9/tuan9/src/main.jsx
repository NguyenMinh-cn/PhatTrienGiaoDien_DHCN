import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import BTUseReducer from './BTUseReducer.jsx'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import BT_redux from './BT_redux.jsx'
import store2 from './redux/store2.js'
import BT_redux_tookit from './BT_redux_tookit.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
       <BTUseReducer /> 
       <BT_redux />
    </Provider> 
    {/* <Provider store={store2}>
    
      <BT_redux_tookit />
    </Provider> */}
  </StrictMode>,
)

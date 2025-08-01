import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './router'

import './Index.css';
import { Provider } from 'react-redux';
import { store } from './Store/main';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
          <App />
    </Provider>
  </StrictMode>
)

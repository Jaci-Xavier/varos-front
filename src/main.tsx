import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx'
import './index.css'
// import { InputContextProvider } from './Context/InputContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <React.StrictMode>
      {/* <InputContextProvider> */}
        <App />
      {/* </InputContextProvider> */}
    </React.StrictMode>
  </BrowserRouter>
)

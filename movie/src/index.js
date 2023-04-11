import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {AppProvider} from './components/Context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>  
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
  </AppProvider>
);



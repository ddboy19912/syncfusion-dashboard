import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {AppProvider} from './contexts/ContextProvider'


ReactDOM.render(
  <React.StrictMode>
  <AppProvider>
    <App />
    </AppProvider>
    </React.StrictMode>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))


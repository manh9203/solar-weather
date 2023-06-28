import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import SetDate from './components/SetDate.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App name="Solar Weather" />
    <SetDate />
  </React.StrictMode>,
)

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { NotificationProvider, UserProvider } from './hooks'
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <NotificationProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </NotificationProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

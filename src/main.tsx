import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles/global.scss';
const savedTheme = localStorage.getItem('theme') || 'dark';
document.body.className = savedTheme;
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename="/todo-app-react">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

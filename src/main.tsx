import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/global.css';

import App from './App.tsx';

const savedTheme = localStorage.getItem('theme') || 'light';

document.body.className = savedTheme;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

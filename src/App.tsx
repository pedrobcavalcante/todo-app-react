import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TodoPage from './pages/TodoPage';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<TodoPage />} />
    </Routes>
  );
};

export default App;

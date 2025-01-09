import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TodoPage from './pages/TodoPage/TodoPage';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<TodoPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

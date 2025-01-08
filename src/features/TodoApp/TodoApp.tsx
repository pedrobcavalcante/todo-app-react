import React, { useState } from 'react';
import Header from '../../components/Header';
import Input from '../../components/Input';

const TodoApp: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [todos, setTodos] = useState<string[]>([]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
    document.body.className = isDarkMode ? 'light' : 'dark';
  };

  const addTodo = (todoText: string) => {
    setTodos([...todos, todoText]);
  };

  return (
    <>
      <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <main className="p-4">
        <Input addTodo={addTodo} />
        {/* Lista de tarefas será adicionada aqui */}
      </main>
    </>
  );
};

export default TodoApp;

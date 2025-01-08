import React, { useState } from 'react';

interface InputProps {
  addTodo: (todoText: string) => void;
}

const Input: React.FC<InputProps> = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState('');

  const handleAdd = () => {
    if (inputValue.trim()) {
      addTodo(inputValue.trim());
      setInputValue('');
    }
  };

  return (
    <div className="flex items-center p-4 bg-white rounded shadow-md">
      <input
        type="text"
        placeholder="Create a new todo..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="flex-grow px-4 py-2 text-lg border-none outline-none"
      />
      <button
        onClick={handleAdd}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Add
      </button>
    </div>
  );
};

export default Input;

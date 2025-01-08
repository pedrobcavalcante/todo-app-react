import React from 'react';

interface TodoItemProps {
  todo: {
    id: number;
    text: string;
    completed: boolean;
  };
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  toggleTodo,
  deleteTodo,
}) => {
  return (
    <li
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '10px',
        textDecoration: todo.completed ? 'line-through' : 'none',
      }}
    >
      <span
        onClick={() => toggleTodo(todo.id)}
        style={{
          cursor: 'pointer',
          flex: 1,
        }}
      >
        {todo.text}
      </span>
      <button
        onClick={() => deleteTodo(todo.id)}
        style={{ marginLeft: '10px' }}
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;

import React from 'react';
import styles from './TodoItem.module.css';

interface TodoItemProps {
  id: number;
  text: string;
  completed: boolean;
  onToggle: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  id,
  text,
  completed,
  onToggle,
}) => {
  return (
    <li className={`${styles.task} ${completed ? styles.completed : ''}`}>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => onToggle(id)}
        />
        {text}
      </label>
    </li>
  );
};

export default TodoItem;

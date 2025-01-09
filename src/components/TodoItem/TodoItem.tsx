import React, { useState } from 'react';
import styles from './TodoItem.module.css';

interface TodoItemProps {
  id: number;
  text: string;
  completed: boolean;
  onToggle: (id: number) => void;
  onEdit: (id: number, newText: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  id,
  text,
  completed,
  onToggle,
  onEdit,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);

  const handleTextClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
    if (editedText.trim() !== text) {
      onEdit(id, editedText.trim());
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setIsEditing(false);
      if (editedText.trim() !== text) {
        onEdit(id, editedText.trim());
      }
    }
  };

  return (
    <li className={`${styles.task} ${completed ? styles.completed : ''}`}>
      <button
        className={`${styles.checkButton} ${completed ? styles.checked : ''}`}
        onClick={() => onToggle(id)}
        aria-label={completed ? 'Mark as incomplete' : 'Mark as complete'}
      >
        {completed && (
          <img src="/src/assets/icons/icon-check.svg" alt="Checked" />
        )}
      </button>
      {isEditing ? (
        <input
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
          onBlur={handleBlur}
          onKeyPress={handleKeyPress}
          autoFocus
          className={styles.editInput}
        />
      ) : (
        <span onClick={handleTextClick} className={styles.text}>
          {text}
        </span>
      )}
    </li>
  );
};

export default TodoItem;

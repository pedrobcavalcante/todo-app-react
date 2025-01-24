import React, { useState } from 'react';
import styles from './TodoItem.module.scss';

interface TodoItemProps {
  id: number;
  text: string;
  completed: boolean;
  onToggle: (id: number) => void;
  onEdit: (id: number, newText: string) => void;
  onDelete: (id: number) => void;
  isFirst: boolean;
}

const TodoItem: React.FC<TodoItemProps> = ({
  id,
  text,
  completed,
  onToggle,
  onEdit,
  onDelete,
  isFirst,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);

  const handleBlurOrEnter = () => {
    setIsEditing(false);
    if (editedText.trim() !== text) {
      onEdit(id, editedText.trim());
    }
  };

  return (
    <li
      className={`${styles.task} ${completed ? styles.completed : ''} ${
        isFirst ? styles.firstTask : ''
      }`}
    >
      <button
        className={`${styles.checkButton} ${completed ? styles.checked : ''}`}
        onClick={() => onToggle(id)}
        aria-label={completed ? 'Mark as incomplete' : 'Mark as complete'}
      >
        {completed && <img src="/icons/icon-check.svg" alt="Checked" />}
      </button>
      {isEditing ? (
        <input
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
          onBlur={handleBlurOrEnter}
          onKeyDown={(e) => e.key === 'Enter' && handleBlurOrEnter()}
          autoFocus
          className={styles.editInput}
        />
      ) : (
        <span onClick={() => setIsEditing(true)} className={styles.text}>
          {text}
        </span>
      )}
      <button
        className={styles.deleteButton}
        onClick={() => onDelete(id)}
        aria-label="Delete task"
      >
        <img src="/icons/icon-cross.svg" alt="Delete" />
      </button>
    </li>
  );
};

export default TodoItem;

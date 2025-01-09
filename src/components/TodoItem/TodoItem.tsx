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

  const handleDoubleClick = () => {
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
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => onToggle(id)}
        />
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
          <span onDoubleClick={handleDoubleClick}>{text}</span>
        )}
      </label>
    </li>
  );
};

export default TodoItem;

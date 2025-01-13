import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import styles from './TodoList.module.css';

interface TodoListProps {
  tasks: { id: number; text: string; completed: boolean }[];
  onToggle: (id: number) => void;
  onEdit: (id: number, newText: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ tasks, onToggle, onEdit }) => {
  return (
    <ul className={styles.taskList}>
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          id={task.id}
          text={task.text}
          completed={task.completed}
          onToggle={onToggle}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
};

export default TodoList;

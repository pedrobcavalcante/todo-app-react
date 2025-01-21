import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import styles from './TodoList.module.scss';

interface TodoListProps {
  tasks: { id: number; text: string; completed: boolean }[];
  onToggle: (id: number) => void;
  onEdit: (id: number, newText: string) => void;
  onDelete: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  tasks,
  onToggle,
  onEdit,
  onDelete,
}) => {
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
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export default TodoList;

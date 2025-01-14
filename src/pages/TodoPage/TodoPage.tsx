import React, { useState } from 'react';
import ListHeader from '../../components/Header/Header';
import Input from '../../components/Input/Input';
import ListFooter from '../../components/Footer/Footer';
import styles from './TodoPage.module.scss';
import TodoList from '../../components/TodoList/TodoList';
import { useTodo } from '../../hooks/useTodo';

const TodoPage: React.FC = () => {
  const {
    tasks,
    addTask,
    editTask,
    toggleTask,
    clearCompleted,
    setFilter,
    remainingTasks,
  } = useTodo();

  const [newTaskText, setNewTaskText] = useState('');

  return (
    <main className={styles.todoPage}>
      <ListHeader />
      <div className={styles.inputContainer}>
        <Input
          placeholder="Create a new todo..."
          value={newTaskText}
          onChange={(e) => setNewTaskText(e.target.value)}
          onEnter={() => {
            addTask(newTaskText);
            setNewTaskText('');
          }}
        />
      </div>
      <TodoList tasks={tasks} onToggle={toggleTask} onEdit={editTask} />
      <ListFooter
        remainingTasks={remainingTasks}
        setFilter={setFilter}
        clearCompleted={clearCompleted}
        filter={'all'}
      />
    </main>
  );
};

export default TodoPage;

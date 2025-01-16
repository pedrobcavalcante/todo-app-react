import React, { useState } from 'react';
import ListHeader from './components/Header/ListHeader';
import Input from './components/Input/Input';
import ListFooter from './components/Footer/Footer';

import styles from './Todo.module.scss';
import TodoList from './components/TodoList/TodoList';
import { useTodo } from './hooks/useTodo';

const Todo: React.FC = () => {
  const {
    tasks,
    addTask,
    editTask,
    toggleTask,
    clearCompleted,
    setFilter,
    remainingTasks,
    filter,
    searchTasks,
  } = useTodo();

  const [newTaskText, setNewTaskText] = useState('');
  const handleSearch = (query: string) => {
    searchTasks(query);
  };
  return (
    <main className={styles.todoPage}>
      <ListHeader onSearch={handleSearch} />
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
        filter={filter}
      />
    </main>
  );
};

export default Todo;

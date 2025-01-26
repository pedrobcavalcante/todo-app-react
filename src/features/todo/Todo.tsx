import React, { useState } from 'react';
import ListHeader from './components/Header/ListHeader';
import Input from './components/Input/Input';
import ListFooter from './components/Footer/Footer';

import styles from './Todo.module.scss';
import TodoList from './components/TodoList/TodoList';
import { useTodo } from './hooks/useTodo';
import { Task } from '../../core/models/task';

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
    clearSearch,
    removeTask,
    reorderTasks,
  } = useTodo();

  const [newTaskText, setNewTaskText] = useState('');

  const handleReorder = (updatedTasks: Task[]) => {
    reorderTasks(updatedTasks);
  };

  const handleSearch = (query: string) => {
    searchTasks(query);
  };

  return (
    <main className={styles.todoPage}>
      <ListHeader onSearch={handleSearch} onClearSearch={clearSearch} />
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
      <TodoList
        tasks={tasks}
        onToggle={toggleTask}
        onEdit={editTask}
        onDelete={removeTask}
        onReorder={handleReorder}
      />
      <ListFooter
        remainingTasks={remainingTasks}
        setFilter={setFilter}
        clearCompleted={clearCompleted}
        filter={filter}
      />
      <span className={styles.dndText}>Drag and drop to reorder list</span>
    </main>
  );
};

export default Todo;

import React, { useState } from 'react';
import styles from './TodoPage.module.css';
import { useTheme } from '../../hooks/useTheme';

const TodoPage: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Complete online JavaScript course', completed: true },
    { id: 2, text: 'Jog around the park 3x', completed: false },
    { id: 3, text: '10 minutes meditation', completed: false },
    { id: 4, text: 'Read for 1 hour', completed: false },
    { id: 5, text: 'Pick up groceries', completed: false },
    { id: 6, text: 'Complete Todo App on Frontend Mentor', completed: false },
  ]);

  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  const toggleTask = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const clearCompleted = () => {
    setTasks((prevTasks) => prevTasks.filter((task) => !task.completed));
  };

  const remainingTasks = tasks.filter((task) => !task.completed).length;

  return (
    <main className={styles.todoPage}>
      {/* Header com título e botão de alternância de tema */}
      <header className={styles.header}>
        <h1 className={styles.title}>TODO</h1>
        <button className={styles.themeToggleButton} onClick={toggleTheme}>
          {theme === 'light' ? '🌞' : '🌙'}
        </button>
      </header>

      {/* Campo de entrada para adicionar novas tarefas */}
      <div className={styles.inputContainer}>
        <input
          type="text"
          placeholder="Create a new todo..."
          className={styles.input}
        />
      </div>

      {/* Lista de tarefas */}
      <ul className={styles.taskList}>
        {filteredTasks.map((task) => (
          <li
            key={task.id}
            className={`${styles.task} ${
              task.completed ? styles.completed : ''
            }`}
          >
            <label>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
              />
              {task.text}
            </label>
          </li>
        ))}
      </ul>

      {/* Footer com contador e filtros */}
      <footer className={styles.footer}>
        <span>{remainingTasks} items left</span>
        <div className={styles.filters}>
          <button
            onClick={() => setFilter('all')}
            className={filter === 'all' ? styles.activeFilter : ''}
          >
            All
          </button>
          <button
            onClick={() => setFilter('active')}
            className={filter === 'active' ? styles.activeFilter : ''}
          >
            Active
          </button>
          <button
            onClick={() => setFilter('completed')}
            className={filter === 'completed' ? styles.activeFilter : ''}
          >
            Completed
          </button>
        </div>
        <button onClick={clearCompleted} className={styles.clearCompleted}>
          Clear Completed
        </button>
      </footer>
    </main>
  );
};

export default TodoPage;

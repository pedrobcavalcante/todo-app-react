import React from 'react';
import styles from './TodoApp.module.css';

const TodoApp: React.FC = () => {
  return (
    <main className={styles.todoApp}>
      <h2>Your Tasks</h2>
      {/* Aqui será implementada a lógica e UI das tarefas */}
      <p>No tasks available. Add a new one!</p>
    </main>
  );
};

export default TodoApp;

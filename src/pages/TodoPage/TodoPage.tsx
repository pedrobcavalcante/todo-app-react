import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Input from '../../components/Input/Input';
import TodoItem from '../../components/TodoItem/TodoItem';
import Footer from '../../components/Footer/Footer';
import styles from './TodoPage.module.css';

const TodoPage: React.FC = () => {
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
  const handleEditTask = (id: number, newText: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, text: newText } : task
      )
    );
  };

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
      <Header />
      <div className={styles.inputContainer}>
        <Input placeholder="Create a new todo..." />
      </div>
      <ul className={styles.taskList}>
        {filteredTasks.map((task) => (
          <TodoItem
            key={task.id}
            id={task.id}
            text={task.text}
            completed={task.completed}
            onToggle={toggleTask}
            onEdit={handleEditTask}
          />
        ))}
      </ul>
      <Footer
        remainingTasks={remainingTasks}
        filter={filter}
        setFilter={setFilter}
        clearCompleted={clearCompleted}
      />
    </main>
  );
};

export default TodoPage;

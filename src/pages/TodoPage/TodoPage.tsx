import React, { useState } from 'react';
import ListHeader from '../../components/Header/Header';
import Input from '../../components/Input/Input';
import ListFooter from '../../components/Footer/Footer';
import styles from './TodoPage.module.scss';
import TodoList from '../../components/TodoList/TodoList';

const TodoPage: React.FC = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Complete online JavaScript course', completed: true },
    { id: 2, text: 'Jog around the park 3x', completed: false },
    { id: 3, text: '10 minutes meditation', completed: false },
    { id: 4, text: 'Read for 1 hour', completed: false },
    { id: 5, text: 'Pick up groceries', completed: false },
    { id: 6, text: 'Complete Todo App on Frontend Mentor', completed: false },
  ]);

  const [newTaskText, setNewTaskText] = useState('');
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  const handleAddTask = () => {
    if (newTaskText.trim() === '') return;

    const newTask = {
      id: tasks.length + 1,
      text: newTaskText.trim(),
      completed: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
    setNewTaskText('');
  };

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
      <ListHeader />
      <div className={styles.inputContainer}>
        <Input
          placeholder="Create a new todo..."
          value={newTaskText}
          onChange={(e) => setNewTaskText(e.target.value)}
          onEnter={handleAddTask}
        />
      </div>
      <TodoList
        tasks={filteredTasks}
        onToggle={toggleTask}
        onEdit={handleEditTask}
      />
      <ListFooter
        remainingTasks={remainingTasks}
        filter={filter}
        setFilter={setFilter}
        clearCompleted={clearCompleted}
      />
    </main>
  );
};

export default TodoPage;

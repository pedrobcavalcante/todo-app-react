import { useState } from 'react';
import { Task } from '../../../core/models/task';

export const useTodo = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTasks = tasks.filter((task) => {
    if (searchQuery) {
      return task.text.toLowerCase().includes(searchQuery.toLowerCase());
    }
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  const addTask = (text: string) => {
    if (text.trim() === '') return;
    const newTask = {
      id: tasks.length + 1,
      text: text.trim(),
      completed: false,
    };
    setTasks((prev) => [...prev, newTask]);
  };

  const editTask = (id: number, newText: string) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, text: newText } : task))
    );
  };

  const toggleTask = (id: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const clearCompleted = () => {
    setTasks((prev) => prev.filter((task) => !task.completed));
  };

  const remainingTasks = tasks.filter((task) => !task.completed).length;

  const searchTasks = (query: string) => {
    setSearchQuery(query);
  };
  const clearSearch = () => {
    setSearchQuery('');
  };
  const deleteTask = (id: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };
  return {
    tasks: filteredTasks,
    addTask,
    editTask,
    toggleTask,
    clearCompleted,
    setFilter,
    remainingTasks,
    filter,
    searchTasks,
    clearSearch,
    deleteTask,
    setTasks,
  };
};

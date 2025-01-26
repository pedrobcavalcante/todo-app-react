import { useState } from 'react';
import { useTaskContext } from '../context/TaskContext';
import { Task } from '../../../core/models/task';

export const useTodo = () => {
  const { tasks, addTask, updateTasks, deleteTask } = useTaskContext();

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

  const addNewTask = async (text: string) => {
    if (!text.trim()) return;

    const newTask: Task = {
      id: Date.now(),
      position: tasks.length,
      text: text.trim(),
      completed: false,
    };
    await addTask(newTask);
  };

  const editTask = async (id: number, newText: string) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, text: newText } : task
    );
    await updateTasks(updatedTasks);
  };

  const toggleTask = async (id: number) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    await updateTasks(updatedTasks);
  };

  const reorderTasks = async (updatedTasks: Task[]) => {
    const reorderedTasks = updatedTasks.map((task, index) => ({
      ...task,
      position: index,
    }));
    await updateTasks(reorderedTasks);
  };

  const clearCompleted = async () => {
    const completedTaskIds = tasks
      .filter((task) => task.completed)
      .map((task) => task.id);

    for (const id of completedTaskIds) {
      await deleteTask(id);
    }

    const activeTasks = tasks.filter((task) => !task.completed);
    const reorderedTasks = activeTasks.map((task, index) => ({
      ...task,
      position: index,
    }));

    await updateTasks(reorderedTasks);
  };

  const removeTask = async (id: number) => {
    await deleteTask(id);
  };

  const searchTasks = (query: string) => {
    setSearchQuery(query);
  };

  const clearSearch = () => {
    setSearchQuery('');
  };

  return {
    tasks: filteredTasks,
    addTask: addNewTask,
    editTask,
    toggleTask,
    clearCompleted,
    setFilter,
    remainingTasks: tasks.filter((task) => !task.completed).length,
    filter,
    searchTasks,
    clearSearch,
    removeTask,
    reorderTasks,
  };
};

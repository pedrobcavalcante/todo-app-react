import { useEffect, useState } from 'react';
import { Task } from '../../../core/models/task';
import { TaskService } from '../../../application/services/task_service';
import { AddTaskUseCase } from '../../../core/usecases/add_task';
import { GetTasksUseCase } from '../../../core/usecases/get_tasks';
import { TaskRepositoryImpl } from '../../../infrastructure/repositories/task_repository_impl';
import { LocalStorageDataSource } from '../../../infrastructure/datasources/local_storage_data_source';
import { UpdateTaskUseCase } from '../../../core/usecases/update_task';

const dataSource = new LocalStorageDataSource();
const repository = new TaskRepositoryImpl(dataSource);
const taskService = new TaskService(
  new AddTaskUseCase(repository),
  new GetTasksUseCase(repository),
  new UpdateTaskUseCase(repository)
);

export const useTodo = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    (async () => {
      const loadedTasks = await taskService.getTasks();
      setTasks(loadedTasks);
    })();
  }, []);

  const filteredTasks = tasks.filter((task) => {
    if (searchQuery) {
      return task.text.toLowerCase().includes(searchQuery.toLowerCase());
    }
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  const addTask = async (text: string) => {
    if (!text.trim()) return;

    const newTask: Task = {
      id: Date.now(),
      text: text.trim(),
      completed: false,
    };
    await taskService.addTask(newTask);
    setTasks((prev) => [...prev, newTask]);
  };

  const editTask = async (id: number, newText: string) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, text: newText } : task
    );
    await taskService.addTask(updatedTasks.find((task) => task.id === id)!);
    setTasks(updatedTasks);
  };

  const toggleTask = async (id: number) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    await taskService.addTask(updatedTasks.find((task) => task.id === id)!);
    setTasks(updatedTasks);
  };

  const clearCompleted = async () => {
    const activeTasks = tasks.filter((task) => !task.completed);
    await taskService.updateTasks(activeTasks);
    setTasks(activeTasks);
  };

  const remainingTasks = tasks.filter((task) => !task.completed).length;

  const searchTasks = (query: string) => {
    setSearchQuery(query);
  };

  const clearSearch = () => {
    setSearchQuery('');
  };

  const deleteTask = async (id: number) => {
    const remainingTasks = tasks.filter((task) => task.id !== id);
    await taskService.updateTasks(remainingTasks);
    setTasks(remainingTasks);
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

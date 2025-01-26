import React, { createContext, useContext, useEffect, useState } from 'react';
import { Task } from '../../../core/models/task';
import { AddTaskUseCase } from '../../../core/usecases/add_task';
import { GetTasksUseCase } from '../../../core/usecases/get_tasks';
import { UpdateTaskUseCase } from '../../../core/usecases/update_task';
import { TaskRepositoryImpl } from '../../../infrastructure/repositories/task_repository_impl';
import { LocalStorageDataSource } from '../../../infrastructure/datasources/local_storage_data_source';
import { DeleteTaskUseCase } from '../../../core/usecases/delete_task';

const dataSource = new LocalStorageDataSource();
const repository = new TaskRepositoryImpl(dataSource);
const addTaskUseCase = new AddTaskUseCase(repository);
const getTasksUseCase = new GetTasksUseCase(repository);
const updateTaskUseCase = new UpdateTaskUseCase(repository);
const deleteTaskUseCase = new DeleteTaskUseCase(repository);
interface TaskContextType {
  tasks: Task[];
  addTask: (task: Task) => Promise<void>;
  updateTasks: (tasks: Task[]) => Promise<void>;
  getTasks: () => Promise<void>;
  deleteTask: (id: number) => Promise<void>;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    (async () => {
      const loadedTasks = await getTasksUseCase.execute();
      setTasks(loadedTasks);
    })();
  }, []);

  const addTask = async (task: Task) => {
    await addTaskUseCase.execute(task);
    setTasks((prev) => [...prev, task]);
  };

  const updateTasks = async (updatedTasks: Task[]) => {
    const reorderedTasks = updatedTasks.map((task, index) => ({
      ...task,
      position: index,
    }));
    for (const task of reorderedTasks) {
      await updateTaskUseCase.execute(task);
    }
    setTasks(reorderedTasks);
  };

  const getTasks = async () => {
    const loadedTasks = await getTasksUseCase.execute();
    setTasks(loadedTasks);
  };

  const deleteTask = async (id: number) => {
    await deleteTaskUseCase.execute(id);
    const remainingTasks = tasks.filter((task) => task.id !== id);
    setTasks(remainingTasks);
  };

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, updateTasks, getTasks, deleteTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTaskContext must be used within a TaskProvider');
  }
  return context;
};

import { Task } from '../models/task';

export interface TaskRepository {
  getTasks(): Promise<Task[]>;
  saveTasks(tasks: Task[]): Promise<void>;
  getTask(id: number): Promise<Task | undefined>;
  updateTask(task: Task): Promise<void>;
}

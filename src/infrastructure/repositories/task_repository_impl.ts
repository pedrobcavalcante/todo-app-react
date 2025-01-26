import { Task } from '../../core/models/task';
import { TaskRepository } from '../../core/repositories/task_repository';
import { LocalStorageDataSource } from '../datasources/local_storage_data_source';

export class TaskRepositoryImpl implements TaskRepository {
  constructor(private dataSource: LocalStorageDataSource) {}
  async getTask(id: number): Promise<Task | undefined> {
    const tasks = await this.dataSource.getTasks();
    return tasks.find((task) => task.id === id);
  }

  async updateTask(task: Task): Promise<void> {
    const tasks = await this.dataSource.getTasks();
    const taskIndex = tasks.findIndex((t) => t.id === task.id);
    if (taskIndex !== -1) {
      tasks[taskIndex] = task;
      await this.dataSource.saveTasks(tasks);
    } else {
      throw new Error('Task not found.');
    }
  }

  async getTasks(): Promise<Task[]> {
    return this.dataSource.getTasks();
  }

  async saveTasks(tasks: Task[]): Promise<void> {
    return this.dataSource.saveTasks(tasks);
  }
  async deleteTask(id: number): Promise<void> {
    return this.dataSource.deleteTask(id);
  }
}

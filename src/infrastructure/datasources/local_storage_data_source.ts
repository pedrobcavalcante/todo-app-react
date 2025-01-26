import { Task } from '../../core/models/task';

export class LocalStorageDataSource {
  private readonly key = 'tasks';

  async getTasks(): Promise<Task[]> {
    const data = localStorage.getItem(this.key);
    return data ? JSON.parse(data) : [];
  }

  async saveTasks(tasks: Task[]): Promise<void> {
    localStorage.setItem(this.key, JSON.stringify(tasks));
  }

  async deleteTask(taskId: number): Promise<void> {
    console.log('removendo taskId', taskId);
    const tasks = await this.getTasks();
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    await this.saveTasks(updatedTasks);
  }
}

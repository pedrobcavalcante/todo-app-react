import { AddTaskUseCase } from '../../core/usecases/add_task';
import { GetTasksUseCase } from '../../core/usecases/get_tasks';
import { Task } from '../../core/models/task';
import { UpdateTaskUseCase } from '../../core/usecases/update_task';

export class TaskService {
  constructor(
    private addTaskUseCase: AddTaskUseCase,
    private getTasksUseCase: GetTasksUseCase,
    private updateTaskUseCase: UpdateTaskUseCase
  ) {}

  async updateTasks(tasks: Task[]): Promise<Task[]> {
    const updatedTasks: Task[] = [];
    for (const task of tasks) {
      updatedTasks.push(await this.updateTaskUseCase.execute(task));
    }
    return updatedTasks;
  }
  async addTask(task: Task): Promise<void> {
    return this.addTaskUseCase.execute(task);
  }

  async getTasks(): Promise<Task[]> {
    return this.getTasksUseCase.execute();
  }
}

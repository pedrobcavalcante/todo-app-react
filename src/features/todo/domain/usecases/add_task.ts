import { TaskRepository } from '../repositories/task_repository';
import { Task } from '../models/task';

export class AddTaskUseCase {
  constructor(private taskRepository: TaskRepository) {}

  async execute(task: Task): Promise<void> {
    const tasks = await this.taskRepository.getTasks();
    tasks.push(task);
    await this.taskRepository.saveTasks(tasks);
  }
}

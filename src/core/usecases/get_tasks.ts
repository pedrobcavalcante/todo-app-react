import { TaskRepository } from '../repositories/task_repository';
import { Task } from '../models/task';

export class GetTasksUseCase {
  constructor(private taskRepository: TaskRepository) {}

  async execute(): Promise<Task[]> {
    return this.taskRepository.getTasks();
  }
}

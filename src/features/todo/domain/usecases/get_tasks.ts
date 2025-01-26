import { Task } from '../../../../core/models/task';
import { TaskRepository } from '../../../../core/repositories/task_repository';

export class GetTasksUseCase {
  constructor(private taskRepository: TaskRepository) {}

  async execute(): Promise<Task[]> {
    return this.taskRepository.getTasks();
  }
}

import { TaskRepository } from '../../../../core/repositories/task_repository';

export class DeleteTaskUseCase {
  private taskRepository: TaskRepository;

  constructor(taskRepository: TaskRepository) {
    this.taskRepository = taskRepository;
  }

  async execute(taskId: number): Promise<void> {
    if (!taskId) {
      throw new Error('Task ID is required');
    }

    await this.taskRepository.deleteTask(taskId);
  }
}

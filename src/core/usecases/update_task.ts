import { Task } from '../models/task';
import { TaskRepository } from '../repositories/task_repository';

export class UpdateTaskUseCase {
  private taskRepository: TaskRepository;

  constructor(taskRepository: TaskRepository) {
    this.taskRepository = taskRepository;
  }

  async execute(task: Task): Promise<Task> {
    const existingTask = await this.taskRepository.getTask(task.id);
    if (!existingTask) {
      throw new Error('Task not found');
    }

    const updatedTask = {
      ...existingTask,
      completed: task.completed,
      text: task.text,
    };
    await this.taskRepository.updateTask(task);

    return updatedTask;
  }
}

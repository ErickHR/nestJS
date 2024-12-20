import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './create-task.dto';

export interface Task {
  id: number;
  name: string;
  description: string;
}

@Injectable()
export class TaskService {
  private data: Task[] = [
    {
      id: 1,
      name: 'task 1',
      description: 'description 1',
    },
    {
      id: 2,
      name: 'task 2',
      description: 'description 2',
    },
  ];

  getTasks(): Task[] {
    return this.data;
  }

  getTaskById(id: number) {
    const task = this.data.find((task) => task.id === id);

    if (task) return task;

    // throw new Error('Task not found');
    return new NotFoundException('Task not founds');
  }

  createTask(task: CreateTaskDto): CreateTaskDto {
    this.data.push({
      ...task,
      id: this.data.length + 1,
    });
    return task;
  }
}

import { Injectable, NotFoundException } from '@nestjs/common';

export interface Task {
  id: number;
  name: string;
}

@Injectable()
export class TaskService {
  private data = [
    {
      id: 1,
      name: 'task 1',
    },
    {
      id: 2,
      name: 'task 2',
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

  createTask(task: Task): Task {
    this.data.push({
      ...task,
      id: this.data.length + 1,
    });
    return task;
  }
}

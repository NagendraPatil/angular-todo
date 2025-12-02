import { Injectable } from '@angular/core';
import { Task } from '../components/task/task.model';
import { NewTask } from '../components/new-task/new-task.model';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor() {
    const tasksData = localStorage.getItem('tasks');
    if (tasksData) {
      this.tasks = JSON.parse(tasksData);
    }
  }
  private tasks: Task[] = [
    {
      id: 't1',
      title: 'Finish Angular project',
      description: 'Complete the Angular project by the end of the week.',
      assignedTo: 'u1',
      dueDate: '2024-06-07',
      isCompleted: false,
    },
    {
      id: 't2',
      title: 'Prepare presentation',
      description: 'Create slides for the upcoming client presentation.',
      assignedTo: 'u2',
      dueDate: '2024-06-10',
      isCompleted: false,
    },
    {
      id: 't3',
      title: 'Update documentation',
      description: 'Revise and update the project documentation.',
      assignedTo: 'u3',
      dueDate: '2024-06-12',
      isCompleted: false,
    },
  ];

  private saveTasksToStorage() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  filteredTasks(userId: string): Task[] {
    return this.tasks.filter((task) => task.assignedTo === userId);
  }

  addTask(task: NewTask, userId: string) {
    this.tasks.unshift({
      id: 't' + (this.tasks.length + 1),
      title: task.title,
      description: task.summary,
      assignedTo: userId,
      dueDate: task.dueDate,
      isCompleted: false,
    });
    this.saveTasksToStorage();
  }

  removeTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
    this.saveTasksToStorage();
  }
}

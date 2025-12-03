import { Component, inject, input, output } from '@angular/core';
import { Task } from './task.model';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-task',
  standalone: false,
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent {
  task = input.required<Task>();
  onCompleteTask = output<string>();
  private taskService = inject(TasksService);

  onComplete() {
    this.taskService.removeTask(this.task().id);
  }
}

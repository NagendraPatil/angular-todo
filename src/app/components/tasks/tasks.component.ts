import { Component, input } from '@angular/core';
import { User } from '../user/user.model';
import { TasksService } from '../../services/tasks.service';
@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent {
  isAddingTask = false;
  SelectedUser = input.required<User | null>();

  constructor(private tasksService: TasksService) {}

  get filteredTasks() {
    return this.tasksService.filteredTasks(this.SelectedUser()!.id);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }
}

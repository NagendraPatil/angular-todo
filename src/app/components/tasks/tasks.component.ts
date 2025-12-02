import { Component, input } from '@angular/core';
import { User } from '../user/user.model';
import { TaskComponent } from '../task/task.component';
import { NewTaskComponent } from '../new-task/new-task.component';
import { TasksService } from '../../services/tasks.service';
import { NewTask } from '../new-task/new-task.model';
@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
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

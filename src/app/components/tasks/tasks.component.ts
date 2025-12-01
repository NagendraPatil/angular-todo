import { Component, input } from '@angular/core';
import { Task } from '../task/task.model';
import { User } from '../user/user.model';
import { TaskComponent } from '../task/task.component';
import { NewTaskComponent } from '../new-task/new-task.component';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent {
  isAddingTask = false;
  SelectedUser = input.required<User | null>();
  tasks: Task[] = [
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

  get filteredTasks() {
    return this.tasks.filter(
      (task) => task.assignedTo === this.SelectedUser()!.id
    );
  }

  onCompleteTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onEndAddTask() {
    this.isAddingTask = false;
  }
}

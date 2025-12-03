import { Component, inject, input, output, signal } from '@angular/core';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss',
  standalone: false,
})
export class NewTaskComponent {
  userId = input.required<string>();
  title = signal<string>('');
  summary = signal<string>('');
  dueDate = signal<string>('');
  onClose = output<void>();
  private taskService = inject(TasksService);

  onCloseForm() {
    this.onClose.emit();
  }

  onSubmit() {
    this.taskService.addTask(
      {
        title: this.title(),
        summary: this.summary(),
        dueDate: this.dueDate(),
      },
      this.userId()
    );
    this.onClose.emit();
  }
}

import { Component, input } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  user = input.required<User>();

  get userImagePath() {
    return `/assets/users/${this.user().avatar}`;
  }
}

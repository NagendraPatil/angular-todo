import { Component } from '@angular/core';
import { DUMMY_USERS } from './mock/users';
import { User } from './components/user/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: false,
})
export class AppComponent {
  users: User[] = DUMMY_USERS;
  selectedUser: User | null = null;

  onUserSelect(user: User) {
    this.selectedUser = user;
  }
}

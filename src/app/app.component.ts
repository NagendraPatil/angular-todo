import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { DUMMY_USERS } from './mock/users';
import { User } from './components/user/user.model';
import { UserComponent } from './components/user/user.component';
import { TasksComponent } from "./components/tasks/tasks.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  users: User[] = DUMMY_USERS;
  selectedUser: User | null = null;

  onUserSelect(user: User) {
    this.selectedUser = user;
  }
}

import { Component, input, output } from '@angular/core';
import { User } from './user.model';
import { CardComponent } from "../../shared/card/card.component";

@Component({
  selector: 'app-user',
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  selectedUserId = input.required<string | undefined>();
  user = input.required<User>();
  onUserSelect = output<User>();

  get userImagePath() {
    return `/assets/users/${this.user().avatar}`;
  }

  onUserClick() {
    this.onUserSelect.emit(this.user());
  }
}

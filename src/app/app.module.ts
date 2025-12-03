import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NewTaskComponent } from './components/new-task/new-task.component';
import { TaskComponent } from './components/task/task.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { BrowserModule } from '@angular/platform-browser';
import { UserComponent } from './components/user/user.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewTaskComponent,
    TaskComponent,
    TasksComponent,
    UserComponent,
  ],
  bootstrap: [AppComponent],
  imports: [BrowserModule, FormsModule, SharedModule],
})
export class AppModule {}

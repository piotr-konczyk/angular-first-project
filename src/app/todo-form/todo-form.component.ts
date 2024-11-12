import {Component, EventEmitter, Input, Output} from '@angular/core';
import { FormsModule } from "@angular/forms";
import {Todo} from '../../types/todo';

@Component({
  selector: 'app-todo-form',
  standalone: true,
    imports: [
        FormsModule
    ],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css'
})
export class TodoFormComponent {
  title = "";
  description = "";

  @Output() eventEmitter = new EventEmitter<Todo>();
  @Input() closeAlert = () => {};
  @Input() todos: Todo[] = [];

  addTodo(todo: Todo) {
    this.eventEmitter.emit(todo);

    this.title = "";
    this.description = "";
  }
}

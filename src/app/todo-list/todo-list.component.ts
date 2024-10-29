import { Component } from '@angular/core';
import { Todo } from '../../types/todo';
import {of} from 'rxjs';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  title = ""
  description = ""

  todos: Todo[] = []

  addTodo(title: string, description: string) {
    this.todos.push({
      title: title,
      description: description,
      isCompleted: false
    })
  }

  protected readonly of = of;
}

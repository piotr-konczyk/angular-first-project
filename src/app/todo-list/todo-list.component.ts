import { Component } from '@angular/core';
import {Todo} from '../../types/todo';

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

  addTodo() {
    this.todos.push({
      title: this.title,
      description: this.description,
      isCompleted: false
    })
  }
}

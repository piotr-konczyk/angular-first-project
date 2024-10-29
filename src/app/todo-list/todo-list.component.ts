import { Component } from '@angular/core';
import { Todo } from '../../types/todo';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})

export class TodoListComponent {
  title = ""
  description = ""

  errorMessage = ""

  todos: Todo[] = []

  addTodo(title: string, description: string) {
    if(!title.length || !description.length) {
      this.errorMessage = "Please fill in all fields"
      return
    }

    this.todos.push({
      title: title,
      description: description,
      isCompleted: false
    })

    this.title = ""
    this.description = ""
    this.errorMessage = ""
  }

  completeTodo(todo: Todo) {
    todo.isCompleted = !todo.isCompleted;
  }

  closeAlert() {
    this.errorMessage = ""
  }
}

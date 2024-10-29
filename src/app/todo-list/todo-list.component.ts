import { Component } from '@angular/core';
import { Todo } from '../../types/todo';
import {NgForOf, NgIf, NgStyle} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    NgStyle,
    FormsModule
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})

export class TodoListComponent {
  title = ""
  description = ""

  errorMessage = ""

  todos: Todo[] = []

  addTodo() {
    if(!this.title.length || !this.description.length) {
      this.errorMessage = "Please fill in all fields"
      return
    }

    this.todos.push({
      title: this.title,
      description: this.description,
      isCompleted: false
    })

    this.title = ""
    this.description = ""
    this.errorMessage = ""
  }

  completeTodo(todo: Todo) {
    todo.isCompleted = !todo.isCompleted;
  }

  deleteTodo(todo: Todo) {
    this.todos = this.todos.filter(t => t !== todo)
  }

  deleteCompletedTodos() {
    this.todos = this.todos.filter(t => !t.isCompleted)
  }

  closeAlert() {
    this.errorMessage = ""
  }
}

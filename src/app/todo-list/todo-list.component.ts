import { Component } from '@angular/core';
import { Todo } from '../../types/todo';
import {NgForOf, NgIf, NgStyle} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AlertComponent} from '../shared/components/alert/alert.component';
import {ToastrService} from 'ngx-toastr';
import {TodoFormComponent} from '../todo-form/todo-form.component';
import {SingleTodoItemComponent} from '../single-todo-item/single-todo-item.component';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    NgStyle,
    FormsModule,
    AlertComponent,
    TodoFormComponent,
    SingleTodoItemComponent
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})

export class TodoListComponent {
  private toast: ToastrService

  errorMessage = ""

  todos: Todo[] = []

  constructor(toast: ToastrService) {
    this.toast = toast
  }

  addTodo(todo: Todo) {
    if(!todo.title.length || !todo.title.length) {
      this.errorMessage = "Please fill in all fields"
      return
    }

    this.todos.push(todo)
    this.toast.success("Todo added successfully")
  }

  toggleTodoCompletion(todo: Todo) {
    todo.isCompleted = !todo.isCompleted;
  }

  deleteTodo(todo: Todo) {
    this.todos = this.todos.filter(t => t !== todo)
  }

  deleteCompletedTodos() {
    const newTodos = this.todos.filter(t => t.isCompleted)

    if(newTodos.length === 0) {
      this.toast.error("No completed todos to delete")
      return
    }

    this.todos = newTodos
  }

  closeAlert() {
    this.errorMessage = ""
  }
}

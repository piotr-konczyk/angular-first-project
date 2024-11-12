import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgStyle} from '@angular/common';
import {Todo} from '../../types/todo';

@Component({
  selector: 'app-single-todo-item',
  standalone: true,
  imports: [
    NgStyle
  ],
  templateUrl: './single-todo-item.component.html',
  styleUrl: './single-todo-item.component.css'
})
export class SingleTodoItemComponent {
  @Input() todo: Todo = { title: "", description: "", isCompleted: false };
  @Input() index: number = 0;

  @Output() toggleTodoCompletionEmit = new EventEmitter<Todo>();
  @Output() deleteTodoEmit = new EventEmitter<Todo>();

  toggleTodoCompletion(todo: Todo) {
    this.toggleTodoCompletionEmit.emit(this.todo);
  }

  deleteTodo(todo: Todo) {
    this.deleteTodoEmit.emit(this.todo);
  }
}

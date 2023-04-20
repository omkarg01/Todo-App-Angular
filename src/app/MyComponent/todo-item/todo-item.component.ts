import { Todo } from './../../Todo';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent {
  @Input() todo: Todo;
  @Input() naming: string;
  @Output() helloClick: EventEmitter<Todo> = new EventEmitter();
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoToggle: EventEmitter<Todo> = new EventEmitter();

  data: string;
  constructor() {
    this.data = 'Data from child';
  }

  deleteTodo(todo: Todo) {
    // console.log(todo);
    this.todoDelete.emit(todo);
  }

  onClickHello(todo: Todo) {
    console.log(this.naming);
    this.todoToggle.emit(todo);
    console.log('Hello');
  }

  onCheckboxClick(todo: Todo) {
    this.helloClick.emit(todo);
    console.log(todo)
  }
}

import { Todo } from './../../Todo';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent {
  @Input() getData: string;
  todos: Todo[];
  name: string;
  constructor() {
    // this.name = 'Omkar';
    // this.todos = [
    //   {
    //     sno: 1,
    //     title: 'This is title',
    //     desc: 'this is desc',
    //     active: true,
    //   },
    //   {
    //     sno: 2,
    //     title: 'This is title2',
    //     desc: 'this is desc2',
    //     active: true,
    //   },
    //   {
    //     sno: 3,
    //     title: 'This is title3',
    //     desc: 'this is desc3',
    //     active: true,
    //   },
    // ];

    if (localStorage.getItem('todos') == null) {
      this.todos = [];
    } else {
      this.todos = JSON.parse(localStorage.getItem('todos')!);
    }
  }

  deleteTodo(todo: Todo) {
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
    console.log(todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  toggleHandler(todo: Todo) {
    // console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    console.log(this.todos[index].active)
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  clickHello(todo: Todo) {
    console.log(todo);
  }
}

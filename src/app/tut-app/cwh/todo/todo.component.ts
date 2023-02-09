import { Component } from '@angular/core';
import { Tod } from '../todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  localItem : string;
  todos : Tod[] ;
  constructor() {
    this.localItem = localStorage.getItem("todos");
    if(this.localItem == null){
    this.todos= [];
    }
    else{
      this.todos = JSON.parse(this.localItem)
    }

  }

  deleteTodo(todo : Tod) {
      const index = this.todos.indexOf(todo);
      this.todos.splice(index, 1);
      localStorage.setItem('todos', JSON.stringify(this.todos));
    }

    addTodo(todo : Tod) {
      this.todos.push(todo);
      localStorage.setItem('todos', JSON.stringify(this.todos));
    }

    onCheck(todo : Tod) {
      const index = this.todos.indexOf(todo);
      this.todos[index].active = !this.todos[index].active;
      localStorage.setItem('todos', JSON.stringify(this.todos));
    }

}

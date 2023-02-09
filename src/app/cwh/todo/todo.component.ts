import { Component } from '@angular/core';
import { Tod } from '../todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  todos : Tod[] ;
  constructor() {
    this.todos= [
      {
        sno : 1,
        title : 'Buy milk',
        desc : "lets buy something",
        active : true

      },
      {
        sno : 2,
        title : 'Buy milk',
        desc : "lets buy something",
        active : true

      },
      {
        sno : 3,
        title : 'Buy milk',
        desc : "lets buy something",
        active : true

      },
      {
        sno : 4,
        title : 'Buy milk',
        desc : "lets buy something",
        active : true

      },
      {
        sno : 5,
        title : 'Buy milk',
        desc : "lets buy something",
        active : true

      }
    ]

  }

}

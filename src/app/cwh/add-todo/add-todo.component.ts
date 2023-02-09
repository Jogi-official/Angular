import { Component , Output , EventEmitter } from '@angular/core';
import { Tod } from '../todo.model';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
title : string;
desc : string;
@Output() todoAdd : EventEmitter<Tod> = new EventEmitter();

onSubmit(){
  const todo = {
  sno : 8 ,
  title : this.title,
  desc : this.desc,
  active : true

}
this.todoAdd.emit(todo);
}
}

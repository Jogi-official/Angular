import { Component , Input, Output , EventEmitter} from '@angular/core';
import { Tod } from '../todo.model';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
@Input() todo : Tod;
@Output() todoDelete : EventEmitter<Tod> = new EventEmitter();
@Output() todoCheckBox : EventEmitter<Tod> = new EventEmitter();

onClick(todo : Tod){
  this.todoDelete.emit(todo);
  console.log("On click has been pressed !!")
}

onCheck(todo : Tod){
  this.todoCheckBox.emit(todo);
}
}

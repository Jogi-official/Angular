import { Component , Input} from '@angular/core';
import { Tod } from '../todo.model';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
@Input() todo : Tod;

onClick(){
  console.log("On click has been pressed !!")
}
}

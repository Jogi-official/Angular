import { Component } from '@angular/core';

@Component({
  selector: 'app-cwh',
  templateUrl: './cwh.component.html',
  styleUrls: ['./cwh.component.css']
})
export class CwhComponent {
  title = "This is the title of the page";

  constructor(){
  // setTimeout(() => {
  //   this.title = "Title Changed";
  // }, 2000);
}

}

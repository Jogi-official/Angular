import { Component } from '@angular/core';

@Component({
  selector: 'app-sec7',
  templateUrl: './sec7.component.html',
  styleUrls: ['./sec7.component.css']
})
export class Sec7Component {
  // numbers = [1, 2, 3, 4, 5];
  oddNumber = [1 , 3, 5];
  evenNumber = [2, 4];
  onlyOdd = false;
}

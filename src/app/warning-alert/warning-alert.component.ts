import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: `
  <p> This is warning ! Start Working !!</p>
  `,
  styles: [`
    p{
      padding : 20px ;
      background-color : mistyrose;
      border : 4px solid red ;
    }
  
  `]
})
export class WarningAlertComponent {

}

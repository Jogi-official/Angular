import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  // templateUrl: './servers.component.html',
  // template : '<app-server></app-server><app-server></app-server>',
  template : `
  <app-server></app-server>
  <p> This is from app-servers inline HTML </p>
  <button>Click here </button>
  `,


  styleUrls: ['./servers.component.css']
})
export class ServersComponent {

}

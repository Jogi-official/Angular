import { Component } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  selector : 'app-servers',
  templateUrl: './servers.component.html',
  // template : '<app-server></app-server><app-server></app-server>',
  // template : `
  // <app-server></app-server>
  // <p> This is from app-servers inline HTML </p>
  // <button>Click here </button>
  // `,


  styleUrls : ["./servers.component.css"]
})
export class ServersComponent {

  allowNewServer = false;
  serverCreationStatus = 'No Server was created';
  serverName = "TestServer";
  serverCreate = false;
  servers = ['TestServer', 'TestServer 2']
    constructor(){
        setTimeout(() =>{
          this.allowNewServer = true;
        },3000);
    }

    onCreateServer(){
      this.serverCreate = true;
      this.servers.push(this.serverName);
      // this.serverCreationStatus = 'Server was Created and Name is '+ this.serverName;
    }
    onUpdateServerName(event : Event){
      this.serverName = (<HTMLInputElement>event.target).value;
    }

}

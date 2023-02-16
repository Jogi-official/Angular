import { Component } from '@angular/core';
import { ServersService  } from '../server.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';

  query_params = {};
  fragments = {};

  constructor(private serversService: ServersService ,
    private route : ActivatedRoute ) { }

  ngOnInit() {
    this.server = this.serversService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
    this.route.queryParams.subscribe()
    this.route.fragment.subscribe()

  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }


}

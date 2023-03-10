import { Component } from '@angular/core';
import { ServersService  } from '../server.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit = false;

  query_params = {};
  fragments = {};

  constructor(private serversService: ServersService ,
    private route : ActivatedRoute ) { }

  ngOnInit() {

    this.route.queryParams.subscribe(
      (query_params : Params)=>{
        this.allowEdit = this.query_params["allowEdit"] !== "1" ? true : false;
        console.log(this.allowEdit)
      }
    )
    this.route.fragment.subscribe()
    const id = this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(id);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;

  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }


}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowedit=true;
  
  constructor(private serversService: ServersService,private route:ActivatedRoute) { }

  ngOnInit() {
console.log(this.route.snapshot.queryParams);
this.route.queryParams.subscribe(
  (paramsedit:Params)=>{
    this.allowedit=paramsedit['allowedit'] === '1' ? true: false

  }
)
console.log(this.route.snapshot.fragment);
    this.server = this.serversService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }

}

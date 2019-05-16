import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  serverID: number = 10;
  serverStatus: string = 'offline';

  getServerStatus(){
    return this.serverStatus;
  }
  constructor() {
    //if random number is > 0.5, status is online,
    //else it's offline
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getColor(){
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
  ngOnInit() {
  }

}

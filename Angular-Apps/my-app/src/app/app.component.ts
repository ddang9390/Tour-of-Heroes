import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username="";
  allowClick = false;

  clicked = false;
  log = [];
  num = 0;
  isUserEmpty(): boolean{
    if(this.username == ""){
      return false;
    }
    else{
      return true;
    }
  }

  resetUser(){
    this.username = "";
  }

  press(){
    this.clicked = !this.clicked;
  }
  addToLog(){
    this.log.push(this.num);
    this.num++;
  }
}

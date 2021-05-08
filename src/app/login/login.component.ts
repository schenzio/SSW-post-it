import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() LoginEvent = new EventEmitter<string>();
  constructor() { }
  newLogin(key: string){
    if (key!=""){
      this.LoginEvent.emit(key);
    }
    else {
      alert("Il campo chiave non può essere vuoto");
    }
  }  
  ngOnInit() {
  }

}
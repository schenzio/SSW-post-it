import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Output() LoginEvent = new EventEmitter<string>();
  @Output() newKeyEvent = new EventEmitter();
  newLogin(key: string){
    if (key!=""){
      this.LoginEvent.emit(key);
    }
    else {
      alert("Il campo chiave non può essere vuoto");
    }
  }  
  newKey(){
    this.newKeyEvent.emit();
  }
}
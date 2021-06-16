import { Component } from '@angular/core';
import { KVaaSService } from './kvaa-s.service';

export class Postit{
  title: string;
  text: string;
  pref: boolean;
}
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  title : string = 'I miei post-it';
  my_data : Array<Postit> = [];
  clicked_pref: boolean = false;
  selected : Postit = new Postit();
  prefs: Array<Postit> = [];
  enter: boolean = false;
  user: string = '';
  constructor(private kv: KVaaSService ){} 
  
  showPostit(idSel: string) {
    this.selected.title = this.my_data[idSel].title;
    this.selected.text = this.my_data[idSel].text;
  }
  addPostit(newPostit: Postit) {
      this.kv.apiKEY = this.user;
      this.my_data.push(newPostit);
      if (newPostit.pref == true){
        this.prefs.push(newPostit)
      }
      let newmsg: string = JSON.stringify(this.my_data);
      this.kv
        .postData(newmsg)
        .then(response => response.json(), error => alert(error))
        .then(data => {
          console.log(data);
        });
    }

  deletePostit(idSel) {
    this.my_data.splice(idSel,1);
    this.selected.text = undefined;
    let newmsg: string = JSON.stringify(this.my_data);
    this.kv.postData(newmsg)
        .then(response => response.json(), error => alert(error))
        .then(data => {
          console.log(data);
        });
  }

  showPref(){
    this.clicked_pref = true;
    this.prefs = this.my_data.filter(postit => postit.pref==true);
  }

  showAll(){
    this.clicked_pref = false;
  }
  login(k: string) {
      this.kv.apiKEY = k;
      this.kv
        .getData()
        .then(response => response.json(), error => alert(error))
        .then(data => {
          let obj = JSON.parse(data);
          for (let i in obj) {
            this.my_data.push(obj[i]);
          }   
          console.log(this.my_data)         
          this.enter = true;
          this.user = k;
        });
    }

  getNewKey() {
    this.kv.Key().then(key => {
      fetch(this.kv.apiURL + '/post?key=' + key + '&msg=' + {}, {
        method: 'POST'
      })
        .then(response => response.json(), error => alert(error))
        .then(data => {
          console.log(data);
        });
    this.user = key;
  }
    )
    this.enter = true;
  }
}
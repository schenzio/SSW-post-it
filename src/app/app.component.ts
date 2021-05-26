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
  prefs:Array<Postit> = [];
  enter: boolean = false;
  user: string = '';
  constructor(private kv: KVaaSService ){} 
  
  showPostit(idSel: string) {
    this.selected.title = this.my_data[idSel].title;
    this.selected.text = this.my_data[idSel].text;
  }
  addPostit(newPostit: Postit) {
      this.kv.apiKEY = this.user;
      this.kv.msg = this.my_data.push(newPostit);
      this.kv
        .postData(this.kv.msg)
        .then(response => response.json(), error => alert(error))
        .then(data => {
          console.log(data);
        });
    }

  deletePostit(idSel) {
    this.my_data.splice(idSel,1);
    this.prefs.splice(idSel,1);
    this.selected.text = undefined;
    this.kv.postData(this.my_data).subscribe( 
      (x: Object) => {},
      err => console.error("Observer2 got an error: " + err)
    );
  }

  showPref(){
    this.clicked_pref = true;
    this.prefs = this.my_data.filter(postit => postit.pref==true);
  }

  showAll(){
    this.clicked_pref = false;
  }

  login(key: string){
    this.kv.apiURL= this.kv.apiURL.slice(0, 25)+key+this.kv.apiURL.slice(25);
    this.user = key;
    this.enter=true;
    this.kv.getData().subscribe(
      (x: any) => { 
        console.log(x);
        for (let i in x){
          this.my_data.push(x[i]);
        }
      }
    ,
    err => {
      console.error('Observer3 got an error: ' + err); 
      this.enter = false;
    }
    )
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
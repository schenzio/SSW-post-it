import { Component, VERSION } from '@angular/core';
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
  name = 'Angular ' + VERSION.major;
  title : string = 'I miei post-it';
  my_data : Array<Postit> = [];
  clicked_pref: boolean;
  selected : Postit = new Postit();
  constructor(private kv: KVaaSService ){}
  getJSON() {
    this.kv.getData().subscribe(
      (x: any) => { 
        for (let i in x){
          this.my_data.push(x[i]);
        }
        console.log(this.my_data)
        },
      err => console.error('Observer got an error: ' + err)
    ) 
  } 
  load = this.getJSON();
  showPostit(idSel: string) {
    this.selected.title = this.my_data[idSel].title;
    this.selected.text = this.my_data[idSel].text;
  }
  test(){
    console.log(this.my_data);
  }
  addPostit(newPostit: Postit){
    this.my_data.push(newPostit);
    this.kv.postData(this.my_data).subscribe( 
      (x: Object) => {},
      err => console.error("Observer got an error: " + err)
    );
    console.log(this.my_data);
  }
  deletePostit(idSel: number) {
    this.my_data.splice(idSel,1);
    this.kv.postData(this.my_data).subscribe( 
      (x: Object) => {},
      err => console.error("Observer got an error: " + err)
    );
  }
  showPref(){
    this.clicked_pref = true;
    var prefs:Array<Postit> = this.my_data.filter(postit => postit.pref==true);
    console.log(prefs);
  }
  showAll(){
    this.clicked_pref = false;
  }
}

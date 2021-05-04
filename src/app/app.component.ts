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
  my_data : Object = {};
  selected : Postit = new Postit();
  constructor(private obj: KVaaSService ){}
  getJSON() {
    this.obj.getData().subscribe(
      (x: any) => { this.my_data = x; console.log(x)},
      err => console.error('Observer got an error: ' + err)
    ) 
  } 
  load = this.getJSON();
  showPostit(idsel: string) {
    this.selected.title = this.my_data[idsel].title;
    this.selected.text = this.my_data[idsel].text;
  }
  test(){
    console.log(this.my_data["2"].title);
  }
  deletePostit(sel: string ) {

  }
  
}

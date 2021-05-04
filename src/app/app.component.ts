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
  showPostit(idSel: string) {
    this.selected.title = this.my_data[idSel].title;
    this.selected.text = this.my_data[idSel].text;
  }
  test(){
    console.log(this.my_data["2"].title);
  }
  addPostit(newPostit: Object){
    var lastK: number = 0;
    for (var key in this.my_data){
      var my_keys = Object.keys(this.my_data);
      var k = my_keys.length;
      lastK = parseInt(my_keys[k-1]);
    }
    let i: number = lastK+1; 
    var postit: any = {[i]: newPostit};
    this.my_data = Object.assign(this.my_data, postit);
    this.obj.postData(this.my_data).subscribe( 
      (x: Object) => {},
      err => console.error("Observer got an error: " + err)
    );
  }
  deletePostit(idSel: string ) {
    delete this.my_data[idSel];
    this.obj.postData(this.my_data).subscribe( 
      (x: Object) => {},
      err => console.error("Observer got an error: " + err)
    );
  }
  
}

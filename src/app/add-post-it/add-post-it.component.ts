import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-post-it',
  templateUrl: './add-post-it.component.html',
  styleUrls: ['./add-post-it.component.css']
})
export class AddPostItComponent implements OnInit {
  @Output() newPostitEvent = new EventEmitter<Object>();
  constructor() { }
  newPostit(title: string, text: string, pref: boolean){
    if (title!=""){
      this.newPostitEvent.emit({title, text, pref});
    }
    else {
      alert("Il titolo non può essere vuoto");
    }
  }
  ngOnInit() {
  }
}
import { Component, OnInit, Input } from '@angular/core';
import { Postit } from '../app.component'
@Component({
  selector: 'app-read-post-it',
  templateUrl: './read-post-it.component.html',
  styleUrls: ['./read-post-it.component.css']
})
export class ReadPostItComponent implements OnInit {
  @Input() selectedC: Postit;
  constructor() { }
  clean(){
    this.selectedC.text = undefined;
  }
  ngOnInit() {
  }

}
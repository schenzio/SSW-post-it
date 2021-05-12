import { Component, Input } from '@angular/core';
import { Postit } from '../app.component'
@Component({
  selector: 'app-read-post-it',
  templateUrl: './read-post-it.component.html',
  styleUrls: ['./read-post-it.component.css']
})
export class ReadPostItComponent {
  @Input() selectedC: Postit;
  clean(){
    this.selectedC.text = undefined;
  }
}
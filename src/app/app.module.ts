import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { AddPostItComponent } from './add-post-it/add-post-it.component';
import { ReadPostItComponent } from './read-post-it/read-post-it.component';
import { KVaaSService } from './kvaa-s.service';

@NgModule({
  imports:      [ BrowserModule, /*FormsModule,*/ HttpClientModule ],
  declarations: [ AppComponent, AddPostItComponent, ReadPostItComponent ],
  bootstrap:    [ AppComponent ],
  providers: [KVaaSService]
})
export class AppModule { }

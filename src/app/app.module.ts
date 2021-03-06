import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { AddPostItComponent } from './add-post-it/add-post-it.component';
import { ReadPostItComponent } from './read-post-it/read-post-it.component';
import { KVaaSService } from './kvaa-s.service';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports:      [ BrowserModule, HttpClientModule ],
  declarations: [ AppComponent, AddPostItComponent, ReadPostItComponent, LoginComponent ],
  bootstrap:    [ AppComponent ],
  providers: [KVaaSService]
})
export class AppModule { }

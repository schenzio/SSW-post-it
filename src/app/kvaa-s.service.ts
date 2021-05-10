import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class KVaaSService {
  apiURL: string = "https://api.keyvalue.xyz//myKey";
  //apiURL: string = "https://api.keyvalue.xyz/5658665f/myKey";
  //apiURL: string = "https://api.keyvalue.xyz/5d26258c/myKey";
  constructor(private http: HttpClient) { }

  public getData(): Observable<Object> {
    return this.http.get(this.apiURL);
  }

  public postData(obJSON: Object): Observable<Object> {
    return this.http.post(this.apiURL, obJSON);
  }
  public getKey(): Observable<Object> {
    this.apiURL= this.apiURL.slice(0, 25)+'new'+this.apiURL.slice(25);
    return this.http.get(this.apiURL);
  }
  public Key() {
    return this.http.post('https://api.keyvalue.xyz/new/newKey', '', {
      responseType: 'text'});
  }
}
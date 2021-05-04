import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class KVaaSService {
  apiURL: string = "https://api.keyvalue.xyz/5658665f/myKey";
  //apiURL: string = "https://api.keyvalue.xyz/5d26258c/myKey";
  constructor(private http: HttpClient) { }

  public getData(): Observable<Object> {
    return this.http.get(this.apiURL);
  }

  public postData(obJSON: Object): Observable<Object> {
    return this.http.post(this.apiURL, obJSON);
  }
}
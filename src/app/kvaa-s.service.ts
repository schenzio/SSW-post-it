import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class KVaaSService {
  apiURL: string =
  'https://eu-central-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/kvaas-giwjg/service/kvaas/incoming_webhook';
  //apiURL: string = "https://api.keyvalue.xyz//myKey";
  //apiURL: string = "https://api.keyvalue.xyz/5658665f/myKey";
  //apiURL: string = "https://api.keyvalue.xyz/5d26258c/myKey";
  constructor(private http: HttpClient) { }

  public getData(): Observable<Object> {
    return this.http.get(this.apiURL);
  }

  public postData(obJSON: Object): Observable<Object> {
    return this.http.post(this.apiURL, obJSON);
  }
  public Key() {
  fetch(this.apiURL + '/new', { method: 'POST' })
    .then(response => response.json(), error => alert(error))
    .then(key => {
      console.log(key);
      fetch(this.apiURL + '/post?key=' + key + '&msg=' + {}, {
        method: 'POST'
      })
        .then(response => response.json(), error => alert(error))
        .then(data => {
          console.log(data);
        });
    });
}
}

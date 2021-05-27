import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class KVaaSService {
  apiKEY: string = '';
  apiURL: string =
  'https://eu-central-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/kvaas-giwjg/service/kvaas/incoming_webhook';
  //msg: Array<Object> = [];

  constructor(private http: HttpClient) { }

  public getData() {
    let promise2 = fetch(this.apiURL + '/get?key=' + this.apiKEY)
    return promise2;  
  }
  public postData(data: string) {
    let promise1 = fetch(
      this.apiURL + '/post?key=' + this.apiKEY + '&msg=' + data,
      { method: 'POST' }
    );
    return promise1;
  }
  
  public Key() {
  let promise = fetch(this.apiURL + '/new', { method: 'POST' })
    .then(response => response.json(), error => alert(error))
    return promise;
  }

}
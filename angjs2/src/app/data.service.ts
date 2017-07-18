//import { DATA } from "./data";
import { Data } from "./data";
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
@Injectable()


export class DataService {
  constructor(private http: Http) { }
  private dataUrl = 'api/data';  // URL to web api
  private headers = new Headers({'Content-Type': 'application/json'});
  h = this.headers;
  getData() : Promise<Data[]> {
    return this.http.get(this.dataUrl)
               .toPromise()
               .then(response => response.json().data as Data[])
               .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.log('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

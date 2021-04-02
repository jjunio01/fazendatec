import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(private http: HttpClient) { }


  consultarStatus() {
    let url = 'http://localhost:3000/bomba';
    return this.http.get(url).toPromise(); 
  }
}

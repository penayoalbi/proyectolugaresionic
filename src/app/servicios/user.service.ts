import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  api:String;
  constructor(private http: HttpClient) {
    this.api = 'http://localhost:666';
   }

  getUsers(){
    return this.http.get('https://jsonplaceholder.typicode.com/users?_limit=3');
  }

}

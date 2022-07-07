import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class FotosService {

  constructor( private http: HttpClient) { }

  getFotos(){
    return this.http.get<any>('https://jsonplaceholder.typicode.com/photos?_limit=10')
  }
}

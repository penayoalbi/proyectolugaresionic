import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { lugar } from '../lugares/lugar.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  api: string;
  lugar: [];

  constructor(private http: HttpClient,){
    this.api="http://localhost:666";
  }
  
  traerLugar(){
    return this.http.get(this.api+'/lugares');
  }
  getUnLugar(lugarId:string){
    return this.http.get(this.api+'/lugares'+lugarId);
    }
/*
  detalleLugar(id:string|number){
    return this.http.get(this.api+'/lugares'+id, JSON.stringify(id))
  }*/


  crearLugar(lugarr: lugar){
    return this.http.post(this.api+'/new-lugar',JSON.stringify(lugarr));
  }

  borrarLugar(lugarId: string){
    return this.http.delete(this.api+'borrar/'+lugarId);
  }
/*
falta crear ruta 
  editarLugar(lugarId:string, lugarr: lugar){
    return this.http.put(this.api+'/editar'+lugarId,JSON.stringify(lugarr));
  }*/

  getComents(){
   // return this.http.get('https://jsonplaceholder.typicode.com/comments?_limit=10');
  }

  

}

import { Injectable, Output, EventEmitter, OnInit } from '@angular/core';
import { lugar } from '../lugares/lugar.model';
import { ApiService } from './api.service';
import { HttpClient} from '@angular/common/http';
import { delay, find} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LugarService implements OnInit {
  
  private lugares:lugar[] 

  ngOnInit(): void {
    this.getSubLugares()
  }

  @Output() emitirLugar: EventEmitter<any> = new EventEmitter();


  resp
   arr:{}
  constructor( private api: ApiService, private http: HttpClient) {}
  //crea copia
  /*
  getLugares(){
    return [...this.lugares];
  }
  */
  setLugar(titulo, imagen){
    this.lugares.push({
      titulo,
      imagen,
      comentario:[],
      id: this.lugares.length+1+ ""
    })
  }

  getLugares(){
   // return [...this.lugares];
   return this.http.get<any>('http://localhost:666/lugares')
    .pipe(
    delay(1500)
   );
  }

  getSubLugares(){
    this.http.get<lugar[]>('http://localhost:666/lugares').subscribe(resp =>{
      this.lugares = resp;
    })
    //return this.lugares.find(x=>{x.id===lugarId})
  }
  
    getLugar(lugarId:string){
      return {
      ...this.lugares.find(lug => {
          return lug.id === lugarId;
        })
        
    };// result = Array.isArray(arr) ? arr.find
   }
  
  /*listarLugares(){
    this.api.traerLugar().subscribe(
      resp=>{
        this.lugar =resp;
      console.log(this.lugar)
    },
      err =>console.error('error en listar lugares')
    );
  }*/

}

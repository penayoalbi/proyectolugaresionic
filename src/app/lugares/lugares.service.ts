import { Injectable } from '@angular/core';
import {lugar} from './lugar.model';

@Injectable({
  providedIn: 'root'
})
export class LugaresService {
  //Este servicio es para acceder mas facil a la lista de lugares
  private lugar: lugar[] = [
    {
    id:'1',
    titulo: 'torre eiffel',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Tour_eiffel_at_sunrise_from_the_trocadero.jpg/275px-Tour_eiffel_at_sunrise_from_the_trocadero.jpg',
    comentario:['Hermoso'],
    },
    {
      id:'2',
      titulo: 'Coliceo',
      image: '',
      comentario:['Hermoso'],
      },
    {
      
      id:'3',
      titulo: 'Cataratas',
      image: '',
      comentario: ['Maravilloso'],
    }
  ]

  constructor( ) { }

  //obtiene todos los lugares
  getLugares(){
    return [...this.lugar]
  }
  //obtiene un solo objeto
  getLugar(lugarId:string){
    return {
      ...this.lugar.find(lugar =>{
        return lugar.id === lugarId;
      })
    }
  }
  addLugar(titulo: string, image: string) {}
  deleteLugar(){}

}

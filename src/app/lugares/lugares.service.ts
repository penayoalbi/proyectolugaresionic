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
    imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Tour_eiffel_at_sunrise_from_the_trocadero.jpg/275px-Tour_eiffel_at_sunrise_from_the_trocadero.jpg',
    comentario:['Hermoso'],
    },
    {
      id:'2',
      titulo: 'Coliceo',
      imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkXpOuvO2l5d6cdXJsqA6trbW7VOHeF8q6gA&usqp=CAU',
      comentario:['Hermoso','Es magnifico'],
      },
    {
      
      id:'3',
      titulo: 'Cataratas',
      imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT29jAkOANk79GhmO1D_8NnQDD2BML8H5eywg&usqp=CAU',
      comentario: [],
    },
    {
      id:'4',
      titulo: 'Coliceo',
      imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkXpOuvO2l5d6cdXJsqA6trbW7VOHeF8q6gA&usqp=CAU',
      comentario:['Hermoso','Es magnifico'],
    },
    {
      id:'5',
      titulo: 'Coliceo',
      imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkXpOuvO2l5d6cdXJsqA6trbW7VOHeF8q6gA&usqp=CAU',
      comentario:['Hermoso','Es magnifico'],
    },
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
  addLugar(titulo: string, imageURL: string) {
    this.lugar.push({
      titulo,
      imageURL,
      comentario: [],
      id: this.lugar.length + 1 +"",
    })
  }

  deleteLugar(lugarId: string){
    this.lugar = this.lugar.filter(lugar => {
      return lugar.id !== lugarId
    });
  }

}

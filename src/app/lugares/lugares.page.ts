import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../servicios/api.service';
import { LugarService } from '../servicios/lugar.service';
import {lugar} from './lugar.model'

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.page.html',
  styleUrls: ['./lugares.page.scss'],
})
export class LugaresPage implements OnInit {
  lugar: any = [];
  nuevo: boolean;
  color: '';//agregar esto
  filtrarPorNombre: '';
  verDetalle: boolean;

//inicia el servicio
  constructor( 
    private router: Router,
    private api: ApiService,
    private lugarService: LugarService){ }
 
  ngOnInit() {
    this.listarLugares();
  }

  listarLugares(){
    this.api.traerLugar().subscribe(
      resp=>{
        this.lugar =resp;
      console.log(this.lugar)
    },
      err =>console.error('error en listar lugares')
    );
  }
  mostrarDetalle(){
    this.verDetalle=true;
    console.log('click en detalle')
  }
/*
  ionViewWillEnter(){
    this.lugar = this.lugarService.getLugar();
  }*/
  
  addLugar(){
    //console.log('click');
    this.router.navigate(['/new-lugar']);
  }

  goToHome(){
    this.router.navigate(['/home'])
  }

}

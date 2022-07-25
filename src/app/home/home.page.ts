import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { lugar } from '../lugares/lugar.model';
import { LugarService } from '../servicios/lugar.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  Lugar: lugar[] =[];
  textoBuscar ='';

  constructor( private router: Router, private lugarService: LugarService) {
    //llamo a la funcion
    this.lugarService.getLugares()
      .subscribe( 
      resp => {this.Lugar = resp;
    });
  }

  buscarLugar(event){
    const texto = event.target.value;
    this.textoBuscar = texto;
    console.log(texto);
  }

  ngOnInit(){
    //this.fotosService.getFotos().subscribe(data =>
   // this.Fotos = data)
  }

  inicioSesion(){
    this.router.navigate(['/login']);
  }

}

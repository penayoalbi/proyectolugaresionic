import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {lugar} from './lugar.model'
import { LugaresService } from './lugares.service';
@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.page.html',
  styleUrls: ['./lugares.page.scss'],
})
export class LugaresPage implements OnInit {
  lugar
//inicia el servicio
  constructor( 
    private lugarService: LugaresService,
    private router: Router) { }
 
  ngOnInit() {
   this.lugar = this.lugarService.getLugares()
  }

  ionViewWillEnter(){
    this.lugar = this.lugarService.getLugares()
  }
  addLugar(){
    //console.log('click');
    this.router.navigate(['/new-lugar']);
  }

  goToHome(){
    this.router.navigate(['/home'])
  }

}

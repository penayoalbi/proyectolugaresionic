import { Component, OnInit } from '@angular/core';
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
  constructor( private lugarService: LugaresService) { }
 
  ngOnInit() {
   this.lugar = this.lugarService.getLugares()
  }

}

import { Component, OnInit } from '@angular/core';
import { FotosService } from './fotos.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  Fotos = [];
  constructor( private fotosService: FotosService) {}

  ngOnInit(){
    this.fotosService.getFotos().subscribe(data =>
     this.Fotos = data)
  }

}

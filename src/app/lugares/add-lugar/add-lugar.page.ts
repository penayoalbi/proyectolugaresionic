import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LugaresService } from '../lugares.service';

@Component({
  selector: 'app-add-lugar',
  templateUrl: './add-lugar.page.html',
  styleUrls: ['./add-lugar.page.scss'],
})
export class AddLugarPage implements OnInit {

  constructor(
    private lugaresService: LugaresService,
    private router:Router) { }

  ngOnInit() {
  }

  saveLugar(titulo: HTMLInputElement, imageURL: HTMLInputElement){
    this.lugaresService.addLugar(titulo.value,imageURL.value);
    this.router.navigate(['/lugares']);
    //console.log(titulo.value, imageURL.value)
    //console.log('click')
  }

}

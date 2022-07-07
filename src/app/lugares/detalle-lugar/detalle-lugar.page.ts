import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router'
import { LugaresService } from '../lugares.service';

@Component({
  selector: 'app-detalle-lugar',
  templateUrl: './detalle-lugar.page.html',
  styleUrls: ['./detalle-lugar.page.scss'],
})
export class DetalleLugarPage implements OnInit {
  lugar
  constructor(private activatedRoute: ActivatedRoute, private lugarService: LugaresService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap =>{
      //obetener los datos con id
      const resuId = paramMap.get('lugarId')
      this.lugar = this.lugarService.getLugar(resuId)
      console.log(this.lugar)
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router'
import { LugaresService } from '../lugares.service';
import { alertController } from '@ionic/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-detalle-lugar',
  templateUrl: './detalle-lugar.page.html',
  styleUrls: ['./detalle-lugar.page.scss'],
})
export class DetalleLugarPage implements OnInit {
  lugar
  constructor(private activatedRoute: ActivatedRoute, 
    private router: Router,
    private lugarService: LugaresService,
    private alertController: AlertController){}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap =>{
      //obetener los datos con id
      const resuId = paramMap.get('lugarId')
      this.lugar = this.lugarService.getLugar(resuId)
     // console.log(this.lugar)
    })
  }
  async deleteLugar(){
    const alertElement = await this.alertController.create({
      header: 'Estas seguro de eliminar este lugar?',
      message: 'Esta acción es irreversible',
      buttons:[
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Eliminar',
          handler: () => {
            this.lugarService.deleteLugar(this.lugar.id)
            this.router.navigate(['/lugares'])
            //console.log(this.lugarService.getLugares())
          }
        }
      ]
    });
    //presenta al user
     await alertElement.present() 
  }

}

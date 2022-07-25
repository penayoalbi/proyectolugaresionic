import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router'
import { alertController } from '@ionic/core';
import { AlertController } from '@ionic/angular';
import { LugarService } from '../../servicios/lugar.service';
import { lugar } from '../lugar.model';
import { ApiService } from 'src/app/servicios/api.service';
import { fromEvent} from 'rxjs';

@Component({
  selector: 'app-detalle-lugar',
  templateUrl: './detalle-lugar.page.html',
  styleUrls: ['./detalle-lugar.page.scss'],
})
export class DetalleLugarPage implements OnInit {
  lugares:lugar[]=[]
  Lugar: lugar;
  mostrar: boolean = false;
  buttonMostrar : string = 'mostrar';
  contLike = 1;
  likeTotal;
  textoBuscar='1'


  constructor(
    private activatedRoute: ActivatedRoute, 
    private lugarService: LugarService,
    private router: Router,
    private alertController: AlertController,
    private api: ApiService)
    {
      this.lugarService.getLugares()
      .subscribe( resp =>{
        this.lugares = resp;
        console.log(this.lugares)
      })
    }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('lugarId')){//redirect
        this.router.navigate(['/lugares'])
      }
      const resuId = paramMap.get("lugarId");
      this.lugarService.getLugar(resuId)
      console.log('lugar'+this.Lugar)
    });
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
           // this.lugarService.deleteLugar(this.lugar.id)
            this.router.navigate(['/lugares'])
            //console.log(this.lugarService.getLugares())
          }
        }
      ]
    });
    //presenta al user
     await alertElement.present() 
  }

  NewComent(){
    if(this.mostrar){
      this.mostrar = false;
      this.buttonMostrar ='Mostrar';
      
    }else{
      this.mostrar = true;
      this.buttonMostrar = 'Ocultar';
    }
  }

  addComent(coment: string ){
    console.log(coment)
  }

  like(){
    this.likeTotal = this.contLike + 1;
  }

}

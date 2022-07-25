import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleLugarPageRoutingModule } from './detalle-lugar-routing.module';

import { DetalleLugarPage } from './detalle-lugar.page';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    PipesModule,
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleLugarPageRoutingModule
  ],
  declarations: [DetalleLugarPage]
})
export class DetalleLugarPageModule {}

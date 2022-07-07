import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddLugarPage } from './add-lugar.page';

const routes: Routes = [
  {
    path: '',
    component: AddLugarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddLugarPageRoutingModule {}

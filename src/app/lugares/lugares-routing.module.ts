import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LugaresPage } from './lugares.page';

const routes: Routes = [
  {
    path: '',
    component: LugaresPage
  },
  {
    path: 'add-lugar',
    loadChildren: () => import('./add-lugar/add-lugar.module').then( m => m.AddLugarPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LugaresPageRoutingModule {}

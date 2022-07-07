import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'lugares',
    children:[
      {
        path:"",
        loadChildren: () => import('./lugares/lugares.module').then( m => m.LugaresPageModule)
      },
      {
        path:":lugarId",
        loadChildren: () => import('./lugares/detalle-lugar/detalle-lugar.module').then(m => m.DetalleLugarPageModule)
      }
    ]
  },
  {
    path:'new-lugar',
    loadChildren: () => import('./lugares/add-lugar/add-lugar.module').then(m => m.AddLugarPageModule)
  },
  {
    path: 'detalle-lugar',
    loadChildren: () => import('./lugares/detalle-lugar/detalle-lugar.module').then( m => m.DetalleLugarPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

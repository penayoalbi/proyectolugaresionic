import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroPipe } from './filtro.pipe';
import { PipePipe } from './pipe.pipe';



@NgModule({
  declarations: [FiltroPipe, PipePipe],
  exports:[FiltroPipe,PipePipe],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }

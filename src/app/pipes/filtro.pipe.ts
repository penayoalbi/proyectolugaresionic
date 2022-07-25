import { Pipe, PipeTransform } from '@angular/core';
import { lugar } from '../lugares/lugar.model';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(lugares: lugar[], texto: string): lugar[]{
    if(texto.length === 0){return lugares;}

    texto = texto.toLocaleLowerCase();
    return lugares.filter(lug => {
      return lug.titulo.toLocaleLowerCase().includes(texto)
      || lug.id.toString().includes(texto);
    });
    //return null;
  }

}

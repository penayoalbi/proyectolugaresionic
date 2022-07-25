import { Pipe, PipeTransform } from '@angular/core';
import { lugar} from '../lugares/lugar.model';

@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {

  transform(value:lugar[], num: string):lugar[] {
    //if(num.length === 0){return value;}
    num = num.toString();
    return value.filter(lug =>{
      return lug.id.includes(num);
    } )
  }

}

import {Pipe, PipeTransform} from '@angular/core';
import {IHotWeatherInfo} from '../services/place-state.service';


@Pipe({
  name: 'placeFilter'
})
export class PlacePipe implements PipeTransform {

  transform(value: IHotWeatherInfo[], type: string): IHotWeatherInfo[] {
      return value.filter(v => v.type.includes(type));
  }

}

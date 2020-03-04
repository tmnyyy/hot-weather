import {Pipe, PipeTransform} from '@angular/core';
import {IHotWeatherInfo} from '../_types';

@Pipe({
  name: 'placeFilter'
})
export class PlacePipe implements PipeTransform {

  transform(value: IHotWeatherInfo[], type: string): IHotWeatherInfo[] {
      return value.filter(v => v.type.includes(type));
  }

}

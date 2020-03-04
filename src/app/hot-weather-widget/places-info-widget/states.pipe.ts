import { Pipe, PipeTransform } from '@angular/core';
import {IHotWeatherInfo} from '../_types';
import {uniqBy} from 'lodash';

@Pipe({
  name: 'states'
})
export class StatesPipe implements PipeTransform {

  transform(value: IHotWeatherInfo[]): IHotWeatherInfo[] {
    return uniqBy(value, 'type');
  }

}

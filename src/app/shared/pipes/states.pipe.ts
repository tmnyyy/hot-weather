import { Pipe, PipeTransform } from '@angular/core';
import {uniqBy} from 'lodash';
import {IHotWeatherInfo} from '../services/place-state.service';

@Pipe({
  name: 'states'
})
export class StatesPipe implements PipeTransform {

  transform(value: IHotWeatherInfo[]): IHotWeatherInfo[] {
    return uniqBy(value, 'type');
  }

}

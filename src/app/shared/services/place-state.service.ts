import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {delay} from 'rxjs/operators';
import {environment} from '../../../environments/environment';

@Injectable()
export class PlaceStateService {


  constructor(private http: HttpClient) {}

  public getPlacesData(): Observable<IHotWeatherInfo[]> {
    const url = `${environment.urlPrefix}/data.json`;
    return this.http.get<IHotWeatherInfo[]>(url).pipe(delay(2000));
  }
}


export interface IHotWeatherInfo {
  img: string;
  address: string;
  phone: number;
  weather: IWeather;
  social_info: ISocialInfo;
  type: string;
}

export interface IWeather {
  title: string;
  icon: string;
  water: number;
  temperature: number;
}

export interface ISocialInfo {
  title: string;
  img: string;
  followers: number;
  following: number;
}

import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IHotWeatherInfo} from './_types';
import {Injectable} from '@angular/core';
import {delay} from 'rxjs/operators';


@Injectable()
export class PlaceStateService {

  private urlPrefix = 'assets';

  constructor(private http: HttpClient) {}

  public getPlacesData(): Observable<IHotWeatherInfo[]> {
    const url = `${this.urlPrefix}/data.json`;
    return this.http.get<IHotWeatherInfo[]>(url).pipe(delay(2000));
  }
}

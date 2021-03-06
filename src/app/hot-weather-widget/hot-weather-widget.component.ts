import { Component, OnInit } from '@angular/core';
import {IHotWeatherInfo, PlaceStateService} from '../shared/services/place-state.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-hot-weather-widget',
  templateUrl: './hot-weather-widget.component.html',
  styleUrls: ['./hot-weather-widget.component.scss'],
  providers: [PlaceStateService]
})
export class HotWeatherWidgetComponent implements OnInit {

  public list$!: Observable<IHotWeatherInfo[]>;

  public social!: IHotWeatherInfo;

  constructor(private placeState: PlaceStateService) { }


  ngOnInit(): void {
      this.list$ = this.placeState.getPlacesData();
  }

  selectPlace(event: IHotWeatherInfo) {
    this.social = event;
  }
}

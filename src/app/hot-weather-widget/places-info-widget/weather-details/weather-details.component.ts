import {Component, Input, OnInit} from '@angular/core';
import {IWeather} from '../../../shared/services/place-state.service';


@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss']
})
export class WeatherDetailsComponent implements OnInit {

  @Input('weather')
  public set SetWeather(value: IWeather) {
    if (!value) {
      return;
    }
    this.weather = value;
  }

  public weather!: IWeather;
  constructor() { }

  ngOnInit(): void {
  }

}

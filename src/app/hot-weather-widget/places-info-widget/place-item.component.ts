import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {IHotWeatherInfo} from '../_types';

@Component({
  selector: 'app-place-item',
  templateUrl: './place-item.component.html',
  styleUrls: ['./place-item.component.scss']
})
export class PlaceItemComponent implements OnInit, OnChanges {

  @Input()
  public place!: IHotWeatherInfo;

  @Output()
  public selectStatePlace: EventEmitter<IHotWeatherInfo> = new EventEmitter<IHotWeatherInfo>();

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.place) {
      console.log(this.place)
    }
  }

  ngOnInit(): void {
  }

  selectPlace(value: IHotWeatherInfo) {
    this.selectStatePlace.emit(value);
  }
}

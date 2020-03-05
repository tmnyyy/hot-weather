import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IHotWeatherInfo} from '../../../shared/services/place-state.service';


@Component({
  selector: 'app-places-list',
  templateUrl: './places-list.component.html',
  styleUrls: ['./places-list.component.scss']
})
export class PlacesListComponent implements OnInit  {

  @Input('list')
  public set setList(value: IHotWeatherInfo[]) {
    if (!value) {
      return;
    }
    this.list = value;
    this.selectedItem = value[0];
    this.selectPlaces.emit(this.selectedItem);
  }

  public list: IHotWeatherInfo[] = [];

  @Output()
  public selectPlaces: EventEmitter<IHotWeatherInfo> = new EventEmitter<IHotWeatherInfo>();

  public selectedItem!: IHotWeatherInfo;

  public constructor() { }



  public ngOnInit(): void {
    if (this.list)  {
      this.selectedItem = this.list[0];
    }
  }


  selectState(event: IHotWeatherInfo) {
    this.selectedItem = event;
  }

  selectAddress(social: IHotWeatherInfo) {
    this.selectedItem = social;
    this.selectPlaces.emit(social);
  }
}

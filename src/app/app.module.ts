import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotWeatherWidgetComponent } from './hot-weather-widget/hot-weather-widget.component';
import { PlacesListComponent } from './hot-weather-widget/places-info-widget/places-list.component';
import { WeatherDetailsComponent } from './hot-weather-widget/places-info-widget/weather-details.component';
import { SocialInfoComponent } from './hot-weather-widget/places-info-widget/social-info.component';
import { PlaceItemComponent } from './hot-weather-widget/places-info-widget/place-item.component';
import {HttpClientModule} from '@angular/common/http';
import { StatesPipe } from './hot-weather-widget/places-info-widget/states.pipe';
import { PlacePipe } from './hot-weather-widget/places-info-widget/place.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HotWeatherWidgetComponent,
    PlacesListComponent,
    WeatherDetailsComponent,
    SocialInfoComponent,
    PlaceItemComponent,
    StatesPipe,
    PlacePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

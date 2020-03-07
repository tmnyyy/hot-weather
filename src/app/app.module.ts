import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotWeatherWidgetComponent } from './hot-weather-widget/hot-weather-widget.component';
import { PlacesListComponent } from './hot-weather-widget/places-list/places-list.component';
import { SocialInfoComponent } from './hot-weather-widget/social-info/social-info.component';
import { PlaceItemComponent } from './hot-weather-widget/places-list/place-item/place-item.component';
import {HttpClientModule} from '@angular/common/http';
import {SharedModule} from './shared/shared.module';
import {WeatherDetailsComponent} from './hot-weather-widget/weather-details/weather-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HotWeatherWidgetComponent,
    PlacesListComponent,
    WeatherDetailsComponent,
    SocialInfoComponent,
    PlaceItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

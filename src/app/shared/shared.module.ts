import {NgModule} from '@angular/core';
import {StatesPipe} from './pipes/states.pipe';
import {PlacePipe} from './pipes/place.pipe';
import {CommonModule} from '@angular/common';


@NgModule({
  declarations: [
    StatesPipe,
    PlacePipe,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    StatesPipe,
    PlacePipe,
  ]
})
export class SharedModule {
}

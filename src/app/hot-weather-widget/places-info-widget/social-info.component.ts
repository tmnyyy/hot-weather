import {Component, Input, OnInit} from '@angular/core';
import {ISocialInfo} from '../_types';

@Component({
  selector: 'app-social-info',
  templateUrl: './social-info.component.html',
  styleUrls: ['./social-info.component.scss']
})
export class SocialInfoComponent implements OnInit {

  @Input('social')
  public set Social(value: ISocialInfo) {
    if (!value) {
      return;
    }
    console.log(value)
    this.social = value;
  }

  public social!: ISocialInfo;

  constructor() { }

  ngOnInit(): void {
  }

}

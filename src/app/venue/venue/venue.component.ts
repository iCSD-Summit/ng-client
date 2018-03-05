import {Component} from '@angular/core';

@Component({
  selector: 'ea-venue',
  templateUrl: './venue.component.html',
  styleUrls: ['./venue.component.scss']
})
export class VenueComponent {
  lat = 51.1086552;
  lng = 17.0391495;

  constructor() {
  }
}

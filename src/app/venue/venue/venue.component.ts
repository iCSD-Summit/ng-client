import {Component} from '@angular/core';

@Component({
  selector: 'ea-venue',
  templateUrl: './venue.component.html',
  styleUrls: ['./venue.component.scss']
})
export class VenueComponent {
  lat = 52.1001582;
  lng = 5.0697159;

  hotelLat =  52.091426;
  hotelLng =  5.106626;

  constructor() {
  }
}

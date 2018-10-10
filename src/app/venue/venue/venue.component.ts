import { Component } from '@angular/core';

@Component({
  selector: 'ea-venue',
  templateUrl: './venue.component.html',
  styleUrls: ['./venue.component.scss']
})
export class VenueComponent {
  plazaLat = 52.091664;
  plazaLng = 5.106806;

  bastionLat = 52.057978;
  bastionLng = 5.106846;

  constructor() {
  }
}

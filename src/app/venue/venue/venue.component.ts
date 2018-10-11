import { Component } from '@angular/core';

@Component({
  selector: 'ea-venue',
  templateUrl: './venue.component.html',
  styleUrls: ['./venue.component.scss'],
})
export class VenueComponent {
  private info_hotel1 = false;
  private info_hotel2 = false;
  private info_restaurant = false;

  plazaLat = 52.091664;
  plazaLng = 5.106806;

  bastionLat = 52.057978;
  bastionLng = 5.106846;

  restaurantLat = 52.092878;
  restaurantLng = 5.116703;

  constructor() {}

  toggle1(): void {
    this.info_hotel1 = !this.info_hotel1;
  }
  toggle2(): void {
    this.info_hotel2 = !this.info_hotel2;
  }
  toggle3(): void {
    this.info_restaurant = !this.info_restaurant;
  }
}

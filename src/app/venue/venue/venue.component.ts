import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'ea-venue',
  templateUrl: './venue.component.html',
  styleUrls: ['./venue.component.scss']
})
export class VenueComponent implements OnInit {
  lat = 51.1086552;
  lng = 17.0391495;
  googleMapsUrl;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    const protocol = this.getProtocol();
    this.googleMapsUrl =
      `${protocol}://www.google.com/maps/search/?api=1&query=${this.lat},${this.lng}&query_place_id=ChIJ4f2vj3fCD0cRM05-5W5lV5Y`;
  }

  private getProtocol() {
    let protocol = 'https';
    if (isPlatformBrowser(this.platformId)) {
      if ((navigator.platform.indexOf('iPhone') !== -1)
        || (navigator.platform.indexOf('iPod') !== -1)
        || (navigator.platform.indexOf('iPad') !== -1)) {
        protocol = 'maps';
      }
    }
    return protocol;
  }

  ngOnInit() {
  }

}

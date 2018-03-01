import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ea-venue',
  templateUrl: './venue.component.html',
  styleUrls: ['./venue.component.scss']
})
export class VenueComponent implements OnInit {
  title = 'My first AGM project';
  lat = 51.1086552;
  lng = 17.0391495;

  constructor() {
  }

  ngOnInit() {
  }

}

import {Component, OnInit, Input} from '@angular/core';
import {Day} from '../model/day';
import {AgendaService} from '../agenda.service';
import {Stream} from '../model/stream';
import {DayService} from './day.service';

@Component({
  selector: 'ea-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss']
})
export class DayComponent implements OnInit {

  @Input()
  day: Day;
  streams: Stream[] = [];
  columnWidthInPercentages: number;
  hours: string[];
  slotsMap: Object;

  constructor(private agendaService: AgendaService, private dayService: DayService) {
  }

  ngOnInit() {
    this.streams = this.agendaService.getStreamsForDay(this.day);
    this.columnWidthInPercentages = this.dayService.calculateColumnWidthInPercentages(this.streams);
    this.slotsMap = this.dayService.getSlotsMap(this.day.timeSlots, this.streams);
    this.hours = Object.keys(this.slotsMap);
  }

}

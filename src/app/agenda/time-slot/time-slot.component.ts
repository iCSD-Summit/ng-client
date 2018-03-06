import {Component, OnInit, Input} from '@angular/core';
import {TimeSlot} from '../model/time-slot';
import {AgendaService} from '../agenda.service';
import {map, initial, last} from 'lodash';
import {Presenter} from '../model/presenter';

@Component({
  selector: 'ea-time-slot',
  templateUrl: './time-slot.component.html',
  styleUrls: ['./time-slot.component.scss']
})
export class TimeSlotComponent implements OnInit {

  @Input()
  timeSlot: TimeSlot;
  presenters: string;

  constructor(private agendaService: AgendaService) { }

  ngOnInit() {
    this.presenters = this.getDisplayablePresenters(this.timeSlot.presenters);
  }

  private getDisplayablePresenters(presenters: any): string {
    if (!presenters) {
      return '';
    }
    if (typeof presenters !== 'string') {
      const presentersNames = map(this.agendaService.findPresenetersByIds(presenters), (presenter: Presenter) => presenter.name);
      return initial(presentersNames).join(', ') + (presentersNames.length > 1 ? ' and ' : '') + last(presentersNames);

    }
    return presenters;
  }

}

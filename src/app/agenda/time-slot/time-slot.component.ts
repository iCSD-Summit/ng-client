import {Component, OnInit, Input} from '@angular/core';
import {TimeSlot} from '../model/time-slot';
import {AgendaService} from '../agenda.service';
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
      let presentersNames = this.agendaService.findPresenetersByIds(presenters).map((presenter: Presenter) => presenter.name);
      return this.concatPresentersNames(presentersNames);
    }
    return presenters;
  }

  private concatPresentersNames(presentersNames: string[]): string {
    if (presentersNames.length === 0) {
      return '';
    }

    let result = '';

    if (presentersNames.length > 1) {
      result += presentersNames.slice(0, presentersNames.length - 1).join(', ') + ' and ';
    }
    
    return result + presentersNames[presentersNames.length - 1];
  }

}

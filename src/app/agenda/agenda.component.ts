import {Component, OnInit, ViewChildren, QueryList} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Agenda} from './model/agenda';
import {AgendaService} from './agenda.service';
import {DayComponent} from './day/day.component';

@Component({
  selector: 'ea-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent implements OnInit {

  @ViewChildren(DayComponent)
  dayComponents: QueryList<DayComponent>;

  agenda: Agenda;
  selectedTabIndex: number;
  isAgendaAvailable: boolean;

  constructor(private route: ActivatedRoute, private agendaService: AgendaService) { }

  ngOnInit() {
    this.agenda = this.route.snapshot.data['agenda'];
    this.agendaService.prepareAndSetAgenda(this.agenda);
    this.selectedTabIndex = this.agendaService.getSelectedDayIndex();
    this.isAgendaAvailable = this.agendaService.isValidAgenda(this.agenda);
  }

  scrollToCurrentTime() {
    this.dayComponents.forEach((dayComponent: DayComponent) => dayComponent.afterDayTabChanged());
  }

}

import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Agenda} from './model/agenda';
import {AgendaService} from './agenda.service';

@Component({
  selector: 'ea-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent implements OnInit {

  agenda: Agenda;
  selectedTabIndex: number;

  constructor(private route: ActivatedRoute, private agendaService: AgendaService) { }

  ngOnInit() {
    this.agenda = this.route.snapshot.data['agenda'];
    this.agendaService.setAgenda(this.agenda);
    this.selectedTabIndex = this.agendaService.getSelectedDayIndex();
  }



}

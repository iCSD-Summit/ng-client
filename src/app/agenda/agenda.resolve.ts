import {Injectable} from '@angular/core';
import {Resolve, ActivatedRouteSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operators';
import {EventAppData} from '../model/event-app-data';
import {EventDataService} from '../core/event-data.service';
import {Agenda} from './model/agenda';

@Injectable()
export class AgendaResolve implements Resolve<Agenda> {
    constructor(
        private eventDataService: EventDataService,
    ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Agenda> {
    return this.eventDataService.getCachedEventAppData().pipe(
        map((event: EventAppData, index: number) => event.agenda));
  }
}

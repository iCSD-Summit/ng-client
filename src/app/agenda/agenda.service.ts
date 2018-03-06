import {Injectable} from '@angular/core';
import {Agenda} from './model/agenda';
import {Stream} from './model/stream';
import {Presenter} from './model/presenter';
import {Day} from './model/day';
import {TimeSlot} from './model/time-slot';
import {chain, value, map, flatten, sortBy, sortedUniq} from 'lodash';

@Injectable()
export class AgendaService {

  private _agenda: Agenda;

  constructor() { }

  public getAgenda(): Agenda {
    return this._agenda;
  }

  public setAgenda(agenda: Agenda) {
    this._agenda = agenda;
  }

  public findStreamById(streamId: number): Stream {
    return this.getAgenda().streams.find((stream: Stream) => stream.id === streamId);
  }

  public findStreamsByIds(streamIds: number[]): Stream[] {
    if (!streamIds) {
      return [];
    }
    return this.getAgenda().streams.filter((stream: Stream) => streamIds.indexOf(stream.id) !== -1);
  }

  public findPresenetersByIds(presenterIds: number[]): Presenter[] {
    if (!presenterIds) {
      return [];
    }
    return this.getAgenda().presenters.filter((presenter: Presenter) => presenterIds.indexOf(presenter.id) !== -1);
  }

  public getStreamsForDay(day: Day): Stream[] {
    const streamIds = chain(day.timeSlots)
      .map((slot: TimeSlot) => slot.streams)
      .flatten()
      .sortBy(id => id)
      .sortedUniq()
      .value();
    return this.findStreamsByIds(streamIds);
  }

}

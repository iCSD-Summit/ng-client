import {Injectable} from '@angular/core';
import {Agenda} from './model/agenda';
import {Stream} from './model/stream';
import {Presenter} from './model/presenter';
import {Day} from './model/day';
import {BasicComparator} from 'ts-comparators';

@Injectable()
export class AgendaService {

  private _agenda: Agenda;

  private streamIdsComparator = new BasicComparator<number>();

  constructor() { }

  public getAgenda(): Agenda {
    return this._agenda;
  }

  public setAgenda(agenda: Agenda) {

    for (const day of agenda.days) {
      for (const timeSlot of day.timeSlots) {
        timeSlot.streams = timeSlot.streams || [];
        timeSlot.streams.sort((stream1: number, stream2: number) => this.streamIdsComparator.compare(stream1, stream2));
      }
    }

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
    let streamIds = [];

    for (const timeSlot of day.timeSlots) {
      timeSlot.streams.reduce((streamIds: number[], streamId: number, index: number, slotStreams: number[]) => {
        if (streamIds.indexOf(streamId) === -1) {
          streamIds.push(streamId);
        }
        return streamIds;
      }, streamIds);
    }

    streamIds.sort((stream1: number, stream2: number) => this.streamIdsComparator.compare(stream1, stream2));

    return this.findStreamsByIds(streamIds);
  }

}

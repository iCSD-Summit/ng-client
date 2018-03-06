import {Day} from './day';
import {Stream} from './stream';
import {Presenter} from './presenter';

export class Agenda {
  private _days: Day[];
  private _streams: Stream[];
  private _presenters: Presenter[];

  get days(): Day[] {
    return this._days;
  }

  set days(value: Day[]) {
    this._days = value;
  }

  get streams(): Stream[] {
    return this._streams;
  }

  set streams(value: Stream[]) {
    this._streams = value;
  }

  get presenters(): Presenter[] {
    return this._presenters;
  }

  set presenters(value: Presenter[]) {
    this._presenters = value;
  }
}

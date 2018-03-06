import {Injectable} from '@angular/core';
import {TimeSlot} from '../model/time-slot';
import {chain, value, map, sortBy, groupBy, reduce} from 'lodash';
import {Stream} from '../model/stream';
import {TimeSlotGridItem} from './model/time-slot-grid-item';

@Injectable()
export class DayService {

  constructor() { }

  public calculateColumnWidthInPercentages(streams: Stream[]): number {
    return 100 / streams.length;
  }

  public getSlotsMap(timeSlots: TimeSlot[], streams: Stream[]): Object {
    const slots = chain(timeSlots)
      .sortBy((timeSlot: TimeSlot) => timeSlot.startTime)
      .groupBy((timeSlot: TimeSlot) => timeSlot.startTime)
      .reduce((result, timeSlotsInHour, hour) => {
        result[hour] = map(timeSlotsInHour, (timeSlot: TimeSlot) => {
          timeSlot.streams = sortBy(timeSlot.streams);

          const rowSpan = 1;
          const colSpan = this.resolveColSpan(timeSlot.streams, streams);
          const color = this.resolveColor(timeSlot.streams, streams);

          return new TimeSlotGridItem(timeSlot, rowSpan, colSpan, color);
        });
        return result;
      }, {})
      .value();

    return slots;
  }

  private resolveColSpan(streamIds: number[], streams: Stream[]): number {
    if (streamIds.length === 0) {
      return streams.length;
    }

    return streamIds.length;
  }

  private resolveColor(streamIds: number[], streams: Stream[]): string {
    if (streamIds.length !== 1) {
      return '';
    }

    const streamObj = streams.find((stream: Stream) => stream.id === streamIds[0]);
    return streamObj ? streamObj.color : '';
  }

}

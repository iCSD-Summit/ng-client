import {Injectable} from '@angular/core';
import {TimeSlot} from '../model/time-slot';
import {Stream} from '../model/stream';
import {TimeSlotGridItem} from './model/time-slot-grid-item';
import {PropertyComparator, StringComparator, CustomComparator} from 'ts-comparators';

@Injectable()
export class DayService {

  constructor() { }

  public calculateColumnWidthInPercentages(streams: Stream[]): number {
    return 100 / streams.length;
  }

  public getSlotsMap(timeSlots: TimeSlot[], streams: Stream[]): Object {
    const slotsComparator = new PropertyComparator<TimeSlot, 'startTime'>('startTime', new StringComparator())
      .then(new CustomComparator<TimeSlot>((value1: TimeSlot, value2: TimeSlot) => value1.streams[0] - value2.streams[0]));
    timeSlots.sort((slot1: TimeSlot, slot2: TimeSlot) => slotsComparator.compare(slot1, slot2));

    let slotsMap = {};

    for (const timeSlot of timeSlots) {
      slotsMap[timeSlot.startTime] = slotsMap[timeSlot.startTime] || [];

      const rowSpan = 1;
      const colSpan = this.resolveColSpan(timeSlot.streams, streams);
      const color = this.resolveColor(timeSlot.streams, streams);

      slotsMap[timeSlot.startTime].push(new TimeSlotGridItem(timeSlot, rowSpan, colSpan, color));
    }

    return slotsMap;
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

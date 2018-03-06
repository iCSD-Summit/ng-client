import {TimeSlot} from '../../model/time-slot';

export class TimeSlotGridItem {
  private _timeSlot: TimeSlot;
  private _rowSpan: number;
  private _colSpan: number;
  private _color: string;

  constructor(timeSlot: TimeSlot, rowSpan: number, colSpan: number, color: string) {
    this._timeSlot = timeSlot;
    this._colSpan = colSpan;
    this._rowSpan = rowSpan;
    this._color = color;
  }

  get timeSlot(): TimeSlot {
    return this._timeSlot;
  }

  set timeSlot(value: TimeSlot) {
    this._timeSlot = value;
  }

  get rowSpan(): number {
    return this._rowSpan;
  }

  set rowSpan(value: number) {
    this._rowSpan = value;
  }

  get colSpan(): number {
    return this._colSpan;
  }

  set colSpan(value: number) {
    this._colSpan = value;
  }

  get color(): string {
    return this._color;
  }

  set color(value: string) {
    this._color = value;
  }
}

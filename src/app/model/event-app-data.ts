import {GeneralMetadata} from './general-metadata';
import {Agenda} from '../agenda/model/agenda';

export class EventAppData {
  private _general: GeneralMetadata;
  private _agenda: Agenda;

  get general(): GeneralMetadata {
    return this._general;
  }

  set general(value: GeneralMetadata) {
    this._general = value;
  }

  get agenda(): Agenda {
    return this._agenda;
  }

  set agenda(value: Agenda) {
    this._agenda = value;
  }
}

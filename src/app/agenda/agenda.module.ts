import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import { DayComponent } from './day/day.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [DayComponent]
})
export class AgendaModule { }

import {NgModule} from "@angular/core";
import {SharedModule} from "../shared/shared.module";
import {DayComponent} from "./day/day.component";
import { AgendaComponent } from './agenda.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [DayComponent, AgendaComponent]
})
export class AgendaModule { }

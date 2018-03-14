import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {AgendaModule} from './agenda/agenda.module';
import {SharedModule} from './shared/shared.module';
import {VenueModule} from './venue/venue.module';
import {ServiceWorkerModule} from '@angular/service-worker';
import { environment } from '../environments/environment.prod';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpModule,
    environment.production ? ServiceWorkerModule.register('/ngsw-worker.js') : [],
    BrowserModule,
    CoreModule,
    SharedModule,
    AgendaModule,
    VenueModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

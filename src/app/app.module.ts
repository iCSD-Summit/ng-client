import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AgendaModule } from './agenda/agenda.module';
import { SharedModule } from './shared/shared.module';
import { VenueModule } from './venue/venue.module';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';
import { StreamsModule } from './streams/streams.module';
import { OfficeModule } from './office/office.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpModule,
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {
      enabled: environment.production,
    }),
    CoreModule,
    SharedModule,
    AgendaModule,
    StreamsModule,
    VenueModule,
    OfficeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

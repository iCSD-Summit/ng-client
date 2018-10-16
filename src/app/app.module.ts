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
import { SupportModule } from './support/support.module';
import { ClubbingModule } from './clubbing/clubbing.module';
import {
  HammerGestureConfig,
  HAMMER_GESTURE_CONFIG,
} from '@angular/platform-browser';
import * as Hammer from 'hammerjs';

export class MyHammerConfig extends HammerGestureConfig {
  buildHammer(element: HTMLElement) {
    const mc = new Hammer(element, {
      touchAction: 'pan-y',
    });

    return mc;
  }
}

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
    SupportModule,
    ClubbingModule,
  ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

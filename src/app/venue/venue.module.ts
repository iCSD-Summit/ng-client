import {NgModule} from '@angular/core';
import {VenueComponent} from './venue/venue.component';
import {SharedModule} from '../shared/shared.module';
import {AgmCoreModule} from '@agm/core';

@NgModule({
  imports: [
    SharedModule,
    AgmCoreModule
  ],
  declarations: [VenueComponent],
  exports: [VenueComponent]
})
export class VenueModule {
}

import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {DayComponent} from '../agenda/day/day.component';
import {VenueComponent} from '../venue/venue/venue.component';
import {AgmCoreModule} from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCT-kDjXoGvNx8OCJWXuAQcnVmEY0rwOHw'
    }),
    RouterModule.forRoot([
      {
        path: 'day',
        component: DayComponent
      },
      {
        path: 'venue',
        component: VenueComponent
      },
      {path: '', redirectTo: '/venue', pathMatch: 'full'}
    ])
  ],
  declarations: [],
  exports: [RouterModule]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}

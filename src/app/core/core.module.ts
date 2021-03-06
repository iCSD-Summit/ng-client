import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderComponent } from './header/header.component';
import { CustomMaterialModule } from '../shared/custom-material.module';
import { NavService } from './nav.service';
import { AgendaComponent } from '../agenda/agenda.component';
import { VenueComponent } from '../venue/venue/venue.component';
import { AgmCoreModule } from '@agm/core';
import { EventDataService } from './event-data.service';
import { HttpClientModule } from '@angular/common/http';
import { AgendaResolve } from '../agenda/agenda.resolve';
import { StreamsResolve } from '../streams/streams.resolve';
import { StreamsComponent } from '../streams/streams.component';
import { SupportComponent } from '../support/support/support.component';
import { SwPushSubBtnComponent } from './sw-push-sub-btn/sw-push-sub-btn.component';
import { SubscriptionService } from './subscription.service';
import { ClubbingComponent } from '../clubbing/clubbing/clubbing.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCT-kDjXoGvNx8OCJWXuAQcnVmEY0rwOHw',
    }),
    RouterModule.forRoot([
      {
        path: '',
        component: AgendaComponent,
        resolve: {
          agendaData: AgendaResolve,
        },
      },
      {
        path: 'streams',
        component: StreamsComponent,
        resolve: {
          streamsData: StreamsResolve,
        },
      },
      {
        path: 'venue',
        component: VenueComponent,
      },
      // {
      //   path: 'office',
      //   component: OfficeComponent,
      // },
      {
        path: 'support',
        component: SupportComponent,
      },
      {
        path: 'clubbing',
        component: ClubbingComponent,
      },
      { path: '', redirectTo: '/', pathMatch: 'full' },
    ]),
    CustomMaterialModule,
  ],
  declarations: [SidenavComponent, HeaderComponent, SwPushSubBtnComponent],
  exports: [
    RouterModule,
    SidenavComponent,
    HeaderComponent,
    SwPushSubBtnComponent,
  ],
  providers: [NavService, EventDataService, SubscriptionService],
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule,
  ) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only',
      );
    }
  }
}

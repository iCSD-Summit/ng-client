import {NgModule, Optional, SkipSelf} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule} from "@angular/router";
import {SidenavComponent} from "./sidenav/sidenav.component";
import {HeaderComponent} from "./header/header.component";
import {CustomMaterialModule} from "../shared/custom-material.module";
import {NavService} from "./nav.service";
import {AgendaComponent} from "../agenda/agenda.component";
import {VenueComponent} from "../venue/venue/venue.component";
import {AgmCoreModule} from "@agm/core";

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCT-kDjXoGvNx8OCJWXuAQcnVmEY0rwOHw'
    }),
    RouterModule.forRoot([
      {
        path: 'agenda',
        component: AgendaComponent
      },
      {
        path: 'venue',
        component: VenueComponent
      },
      {path: '', redirectTo: '/venue', pathMatch: 'full'}
    ]),
    CustomMaterialModule
  ],
  declarations: [SidenavComponent, HeaderComponent],
  exports: [RouterModule, SidenavComponent, HeaderComponent],
  providers: [NavService]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}

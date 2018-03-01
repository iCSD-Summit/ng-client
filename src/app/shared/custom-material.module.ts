import {NgModule} from "@angular/core";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {LayoutModule} from "@angular/cdk/layout";
import {MatToolbarModule, MatIconModule, MatButtonModule, MatTabsModule, MatGridListModule} from "@angular/material";


@NgModule({
  declarations: [
  ],
  imports: [
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatGridListModule,
    LayoutModule,
  ],
  exports: [
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatGridListModule,
    LayoutModule,
  ],
  providers: [
  ],
})
export class CustomMaterialModule { }

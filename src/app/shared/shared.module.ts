import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {MatButtonModule, MatIconModule, MatToolbarModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule, MatIconModule, MatButtonModule
  ],
  declarations: [HeaderComponent],
  exports: [
    CommonModule,
    HeaderComponent,
    MatIconModule
  ]
})
export class SharedModule {
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClubbingComponent } from './clubbing/clubbing.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [ClubbingComponent],
  exports: [ClubbingComponent],
})
export class ClubbingModule {}

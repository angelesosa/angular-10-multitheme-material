import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressMatComponent } from './progress-mat.component';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [ProgressMatComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule
  ],
  exports: [
    ProgressMatComponent
  ],
})
export class ProgressMatModule { }

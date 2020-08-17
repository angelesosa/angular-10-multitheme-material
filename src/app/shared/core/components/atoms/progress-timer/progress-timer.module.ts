import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgressTimerComponent } from './progress-timer.component';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [ProgressTimerComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    ProgressTimerComponent,
  ],
})
export class ProgressTimerModule { }

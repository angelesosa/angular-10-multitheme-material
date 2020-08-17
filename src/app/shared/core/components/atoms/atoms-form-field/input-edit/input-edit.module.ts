import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputEditComponent } from './input-edit.component';

import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaskPipe, NgxMaskModule } from 'ngx-mask';



@NgModule({
  declarations: [InputEditComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [
    MaskPipe
  ],
  exports: [
    InputEditComponent
  ],
})
export class InputEditModule { }

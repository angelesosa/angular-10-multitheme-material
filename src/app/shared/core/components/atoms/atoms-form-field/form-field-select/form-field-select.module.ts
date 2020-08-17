import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormFieldSelectComponent } from './form-field-select.component';


import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FormFieldSelectComponent],
  imports: [
    CommonModule,
    MatSelectModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    FormFieldSelectComponent
  ],
})
export class FormFieldSelectModule { }

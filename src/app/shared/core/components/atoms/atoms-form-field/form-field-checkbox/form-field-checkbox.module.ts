import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormFieldCheckboxComponent } from './form-field-checkbox.component';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [FormFieldCheckboxComponent],
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    FormFieldCheckboxComponent
  ],
})
export class FormFieldCheckboxModule { }

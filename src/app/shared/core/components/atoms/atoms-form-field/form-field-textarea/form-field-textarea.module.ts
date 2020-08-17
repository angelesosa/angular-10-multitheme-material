import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormFieldTextareaComponent } from './form-field-textarea.component';

import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [FormFieldTextareaComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    FormFieldTextareaComponent,
  ],
})
export class FormFieldTextareaModule { }

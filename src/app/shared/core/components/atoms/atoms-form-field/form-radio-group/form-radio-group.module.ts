import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormRadioGroupComponent } from './form-radio-group.component';

import {MatRadioModule} from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [FormRadioGroupComponent],
  imports: [
    CommonModule,
    MatRadioModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    FormRadioGroupComponent
  ]
})
export class FormRadioGroupModule { }

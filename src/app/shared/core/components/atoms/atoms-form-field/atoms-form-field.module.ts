import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormFieldCheckboxModule } from './form-field-checkbox/form-field-checkbox.module';
import { FormFieldInputModule } from './form-field-input/form-field-input.module';
import { FormFieldSelectModule } from './form-field-select/form-field-select.module';
import { FormRadioGroupModule } from './form-radio-group/form-radio-group.module';
import { FormFieldTextareaModule } from './form-field-textarea/form-field-textarea.module';
import { InputSearchModule } from './input-search/input-search.module';
import { InputEditModule } from './input-edit/input-edit.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormFieldCheckboxModule,
    FormFieldInputModule,
    FormFieldSelectModule,
    FormRadioGroupModule,
    FormFieldTextareaModule,
    InputSearchModule,
    InputEditModule,
  ],
  exports: [
    FormFieldCheckboxModule,
    FormFieldInputModule,
    FormFieldSelectModule,
    FormRadioGroupModule,
    FormFieldTextareaModule,
    InputSearchModule,
    InputEditModule,
  ]
})
export class AtomsFormFieldModule { }

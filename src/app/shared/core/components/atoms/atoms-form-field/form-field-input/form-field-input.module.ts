import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFieldInputComponent } from './form-field-input.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgxMaskModule, MaskPipe } from 'ngx-mask';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FormFieldInputComponent],
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
    FormFieldInputComponent
  ],
})
export class FormFieldInputModule { }

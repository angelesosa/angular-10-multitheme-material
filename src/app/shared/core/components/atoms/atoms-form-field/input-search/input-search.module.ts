import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputSearchComponent } from './input-search.component';

import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [InputSearchComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    InputSearchComponent
  ],
})
export class InputSearchModule { }

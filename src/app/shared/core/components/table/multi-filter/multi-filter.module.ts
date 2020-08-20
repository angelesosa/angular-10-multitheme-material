import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiFilterComponent } from './multi-filter.component';


import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [MultiFilterComponent],
  imports: [
    CommonModule,
    MatChipsModule,
    MatIconModule,
    MatInputModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    MultiFilterComponent
  ],
})
export class MultiFilterModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountriesRoutingModule } from './countries-routing.module';
import { CountriesComponent } from './countries.component';

import { MatCardModule } from '@angular/material/card';
import { TablePaginationModule } from '@core/components/table/table-pagination/table-pagination.module';
import { LocalCommonModule } from '@common/local-common.module';
import { CountryWriteComponent } from './country-write/country-write.component';
import { AtomsFormFieldModule } from '../../shared/core/components/atoms/atoms-form-field/atoms-form-field.module';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../shared/core/ui-kit/material.module';

@NgModule({
  declarations: [CountriesComponent, CountryWriteComponent],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    MatCardModule,
    TablePaginationModule,
    LocalCommonModule,
    AtomsFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class CountriesModule { }

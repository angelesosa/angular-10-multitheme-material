import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductWriteComponent } from './product-write/product-write.component';

import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../shared/core/ui-kit/material.module';

import { LocalCommonModule } from '@common/local-common.module';
import { TableMultifilterModule } from '@core/components/table/table-multifilter/table-multifilter.module';
import { AtomsFormFieldModule } from '../../shared/core/components/atoms/atoms-form-field/atoms-form-field.module';

@NgModule({
  declarations: [ProductsComponent, ProductWriteComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    LocalCommonModule,
    TableMultifilterModule,
    AtomsFormFieldModule,
  ]
})
export class ProductsModule { }

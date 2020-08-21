import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';

import { MatCardModule } from '@angular/material/card';
import { LocalCommonModule } from '@common/local-common.module';
import { TableMultifilterModule } from '@core/components/table/table-multifilter/table-multifilter.module';

@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatCardModule,
    LocalCommonModule,
    TableMultifilterModule,
  ]
})
export class ProductsModule { }

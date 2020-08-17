import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabExampleComponent } from './tab-example.component';
import { TabExampleRoutingModule } from './tab-example-routing.module';
import { LocalCommonModule } from '@common/local-common.module';
import { TabOneComponent } from './tab-one/tab-one.component';
import { TabTwoComponent } from './tab-two/tab-two.component';

@NgModule({
  declarations: [
    TabExampleComponent,
    TabOneComponent,
    TabTwoComponent,
  ],
  imports: [CommonModule, LocalCommonModule, TabExampleRoutingModule],
})
export class TabExampleModule {}

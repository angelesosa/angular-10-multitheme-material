import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabExampleComponent } from './tab-example.component';
import { TabOneComponent } from './tab-one/tab-one.component';
import { TabTwoComponent } from './tab-two/tab-two.component';

const routes: Routes = [
  {
    path: '',
    component: TabExampleComponent,
    children: [
      { path: 'tabone', component: TabOneComponent },
      { path: 'tabtwo', component: TabTwoComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabExampleRoutingModule { }

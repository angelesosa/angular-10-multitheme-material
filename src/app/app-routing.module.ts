import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './modules/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'home', 		loadChildren: () => import('./modules/home/home.module').then((m) => m.HomeModule) },
      { path: 'tabexample', 		loadChildren: () => import('./modules/tab-example/tab-example.module').then((m) => m.TabExampleModule) },
      { path: 'countries', 	loadChildren: () => import('./modules/countries/countries.module').then(m => m.CountriesModule) },
    ],
  },
];
// const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

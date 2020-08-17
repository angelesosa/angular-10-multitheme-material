import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './components/title/title.component';
import { LogoComponent } from './components/logo/logo.component';
import { RouterOutletTabComponent } from './components/router-outlet-tab/router-outlet-tab.component';
import { Routes, RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { LoadingOverlayComponent } from './components/loading-overlay/loading-overlay.component';
import { LoadingComponent } from './components/loading/loading.component';
// const routerChildren: Routes = [];
@NgModule({
  declarations: [
    TitleComponent,
    LogoComponent,
    RouterOutletTabComponent,
    LoadingComponent,
    LoadingOverlayComponent,
  ],
  imports: [CommonModule, RouterModule, MatTabsModule],
  exports: [TitleComponent, LogoComponent, RouterOutletTabComponent],
})
export class LocalCommonModule {}

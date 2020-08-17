import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { LayoutsModule } from '@common/layouts/layouts.module';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { LocalCommonModule } from '@common/local-common.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SideNavMenuGroupComponent } from '@common/components/side-nav-menu-group/side-nav-menu-group.component';
import { ToolbarComponent } from '@common/components/toolbar/toolbar.component';
import { MatRippleModule } from '@angular/material/core';
import { SideNavToggleComponent } from '@common/components/side-nav-toggle/side-nav-toggle.component';
import { SideNavMenuGroupListComponent } from '@common/components/side-nav-menu-group-list/side-nav-menu-group-list.component';
import { SideNavMenuItemComponent } from '@common/components/side-nav-menu-item/side-nav-menu-item.component';
import { ToolbarProfileIconComponent } from '@common/components/toolbar-profile-icon/toolbar-profile-icon.component';
import { MatMenuModule } from '@angular/material/menu';
import { ToolbarProfileMenuComponent } from '@common/components/toolbar-profile-menu/toolbar-profile-menu.component';
import { ProjectPickerComponent } from '@common/components/project-picker/project-picker.component';
import { RouterOutletMainComponent } from '@common/components/router-outlet-main/router-outlet-main.component';
import { MatTabsModule } from '@angular/material/tabs';

const routerChildren: Routes = [];

@NgModule({
  declarations: [
    MainComponent,
    ToolbarComponent,
    SideNavToggleComponent,
    SideNavMenuItemComponent,
    SideNavMenuGroupComponent,
    SideNavMenuGroupListComponent,
    ToolbarProfileIconComponent,
    ToolbarProfileMenuComponent,
    ProjectPickerComponent,
    RouterOutletMainComponent,
  ],
  imports: [
    CommonModule,
    LayoutsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    LocalCommonModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatRippleModule,
    MatMenuModule,
    RouterModule.forRoot(routerChildren),
  ],
  exports: [MainComponent],
})
export class MainModule {}

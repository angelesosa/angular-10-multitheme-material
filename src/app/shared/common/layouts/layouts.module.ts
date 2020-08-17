import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentLayoutComponent } from './content-layout/content-layout.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { SideNavLayoutComponent } from './side-nav-layout/side-nav-layout.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SideNavItemLayoutComponent } from './side-nav-item-layout/side-nav-item-layout.component';
import { MatRippleModule } from '@angular/material/core';
import { ToolbarLayoutComponent } from './toolbar-layout/toolbar-layout.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ToolbarProfileIconLayoutComponent } from './toolbar-profile-icon-layout/toolbar-profile-icon-layout.component';
import { ToolbarProfileMenuLayoutComponent } from './toolbar-profile-menu-layout/toolbar-profile-menu-layout.component';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [
    ContentLayoutComponent,
    MainLayoutComponent,
    SideNavLayoutComponent,
    SideNavItemLayoutComponent,
    ToolbarLayoutComponent,
    ToolbarProfileIconLayoutComponent,
    ToolbarProfileMenuLayoutComponent,
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatRippleModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
  ],
  exports: [
    ContentLayoutComponent,
    MainLayoutComponent,
    SideNavLayoutComponent,
    SideNavItemLayoutComponent,
    ToolbarLayoutComponent,
    ToolbarProfileMenuLayoutComponent,
  ],
})
export class LayoutsModule {}

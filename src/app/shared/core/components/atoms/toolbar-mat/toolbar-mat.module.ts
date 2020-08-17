import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ToolbarMatComponent } from './toolbar-mat.component';

@NgModule({
  declarations: [ToolbarMatComponent],
  imports: [CommonModule, MatToolbarModule],
  exports: [ToolbarMatComponent],
})
export class ToolbarMatModule {}

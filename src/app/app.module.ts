import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainModule } from './modules/main.module';
import { HttpClientModule } from '@angular/common/http';
import { LocalCommonModule } from '@common/local-common.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MainModule,
    LocalCommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

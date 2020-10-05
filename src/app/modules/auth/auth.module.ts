import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { LogoAuthComponent } from './logo-auth/logo-auth.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../shared/core/ui-kit/material.module';

import { LocalCommonModule } from '@common/local-common.module';
import { AtomsFormFieldModule } from '../../shared/core/components/atoms/atoms-form-field/atoms-form-field.module';
import { FirstTimeComponent } from './first-time/first-time.component';




@NgModule({
  declarations: [AuthComponent, LoginComponent, LogoAuthComponent, FirstTimeComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,

    FormsModule,
    ReactiveFormsModule,
    MaterialModule,

    LocalCommonModule,
    AtomsFormFieldModule,
  ]
})
export class AuthModule { }

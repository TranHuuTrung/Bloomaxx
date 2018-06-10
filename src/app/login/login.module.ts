import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { SharedModule } from '../shared/shared.module';
import { SignupComponent } from './signup/signup.component';
import { RecaptchaModule } from 'ng-recaptcha';
import { PersonalComponent } from './signup/personal/personal.component';
import { CompanyComponent } from './signup/company/company.component';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule,
    RecaptchaModule.forRoot()
  ],
  declarations: [LoginComponent, SignupComponent, PersonalComponent, CompanyComponent]
})
export class LoginModule { }

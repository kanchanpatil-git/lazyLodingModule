import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
console.log("userLoding..")

@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }

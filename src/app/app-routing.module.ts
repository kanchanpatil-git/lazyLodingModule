import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { LoginComponent } from './admin/login/login.component';
import { SignupComponent } from './admin/signup/signup.component';


const routes: Routes = [
  { path:"admin",loadChildren:()=>import ('./admin/admin.module').then(module=>module.AdminModule)
    },
  //  {
  //    path:"user",loadChildren:()=>import('./user/user.module').then(module=>module.UserModule)
  //  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

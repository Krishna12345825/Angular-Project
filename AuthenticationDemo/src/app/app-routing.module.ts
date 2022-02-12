import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfterloginComponent } from './afterlogin/afterlogin.component';
import { HomeComponent } from './home/home.component';
import { LoginGuard } from './login.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'afterlogin',component:AfterloginComponent, canActivate:[LoginGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

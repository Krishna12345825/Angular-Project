import { Component, OnInit } from '@angular/core';
import { LoginLogoutService } from '../login-logout.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {

  constructor( private loginlogoutservice:LoginLogoutService) { }

 login(){

  this.loginlogoutservice.login();
 }
 logout(){
   this.loginlogoutservice.logout();

 }

}

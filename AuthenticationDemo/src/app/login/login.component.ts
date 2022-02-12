import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
flag:any=true;
  constructor(private service:LoginService,private router:Router) { }
 signin(fvalues: any){
   this.flag=this.service.login(fvalues);
   if(this.flag==true)
   {
     this.router.navigate(['/afterlogin']);
   }
 }

  ngOnInit(): void {
  }

}

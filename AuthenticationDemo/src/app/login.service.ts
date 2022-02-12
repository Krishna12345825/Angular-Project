import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

   token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmFtZSI6ImFiY0BnbWFpbC5jb20iLCJuYW1lIjoiS3Jpc2huYSBLdW1hciIsInBhc3MiOiIxMjM0In0.kV5DZetZpxJQK4WX8Xfqss5eOWmi3WWMhVfE-DbVdB4";

  constructor(private http:HttpClient) { }
  login(obj:any)
  {
    //return this.http.post('path',JSON.stringify(obj));
  
  if(obj.uname==='abc@gmail.com' && obj.pass==='1234'){
    localStorage.setItem('token',this.token);
    return true;
  }
  else
  {
    return false;
  }
  }
  logout()
  {
  localStorage.removeItem('token');
  }

  getUser()
  {
    let token:any = localStorage.getItem('token');
    let obj=new JwtHelperService();
   return  obj.decodeToken(token);
  }


  isLoggedIn(){
    let token=localStorage.getItem('token');
     if(token==null)
     {
       return false;
     }
     else
     {
       return true;
     }
  }
}

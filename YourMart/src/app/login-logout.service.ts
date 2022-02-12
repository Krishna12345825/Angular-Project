import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import *as firebase from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class LoginLogoutService {

  user$: any;
  
  constructor(private af:AngularFireAuth) { 
    af.authState.Subscribe((x: any)=>this.user$=x);
  }

  login() {

    this.af.auth.signWithRedirect(new firebase.auth.GoogleAuthProvider());
  }


  logout() {
this.af.auth.signOut();
  }
}

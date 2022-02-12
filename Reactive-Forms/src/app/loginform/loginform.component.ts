import {SpaceValidator} from '../loginform/space.validation';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {

  form=new FormGroup({

    'uname':new FormControl('',[Validators.required, Validators.minLength(5), SpaceValidator.isSpace]),
    'pass':new FormControl('',Validators.required)
  });

  constructor() { }
 get uname(){
   return this.form.get('uname');
 }

  ngOnInit(): void {
  }

}

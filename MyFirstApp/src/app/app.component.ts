import { Component, Output } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
         
  path;  //variable
  state;   // variable 
  colval;  // variable
  w;  // variable
  wpx; // variable
  c;  // variable 
  
  r1:Record<string,string>={};

  tsbstyle;  // Variable
  states:boolean;  // Variable


  count; // variable
  isopen:boolean;
  val
constructor(){
  this.path="../assets/pic1.jpg";
  this.state=true;

  this.colval=2;
  this.wpx=200;
  this.w="300px";
  this.c="purple";
  this.r1={
    'font-style':'italic',
    'fontWeight':'bold',
    'font-size':'25px',
    'color':'green'
  };

  this.tsbstyle="bstyle";
  this.states=true;


  this.count=0;
  this.isopen=true;
  this.val="ram kumar";
}
increase(){
  this.count++;
}
decrease(){
  this.count--;
}
openevent(){
  this.isopen=!this.isopen;
}
inputdemo($event:any)
{
  alert($event.target.value);
}
// onkeydown($event:any)
// {
//  alert($event.target.value);
// }
// onkeydown($event:any)
// {
//   if($event.keyCode==13)
//   alert($event.target.value)
// }
// onkeydown($event:any)
// {
//  if($event.key=="Enter")
//  alert($event.target.value);
// }
// 

// onkeydown($event:any)
// {
//  alert($event.target.value);
// }


onkeydown(val:any)
{
 alert(val);
}

// Two way Data Binding
// onkeydown()
// {
//   alert();
// }



// @input and @Output 



}

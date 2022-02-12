import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumber]'
})
export class NumberDirective {

  y:any;
@HostListener('keyup') m2(){
  var x= this.e1.nativeElement.value; //123e
  if(x==""){
    this.e1.nativeElement.value=this.y;
  }
  else{
    this.y=x;//123
  }
}
  constructor(private e1:ElementRef) { }

}

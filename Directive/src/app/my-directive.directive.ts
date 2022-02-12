import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMyDirective]'
})
export class MyDirectiveDirective {

  @HostListener('blur') m1(){
   // alert("invoked");
    let val:string=this.e1.nativeElement.value;
    this.e1.nativeElement.value=val.toUpperCase();
  }
  constructor(private e1:ElementRef) { }

}
 
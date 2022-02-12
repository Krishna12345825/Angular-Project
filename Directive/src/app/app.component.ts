import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Directive';
  fontSizepx=16;
  fsize=16;
  likecount=0;

  // PIPES
  msg="hello world";
  dt=new Date();
  amt=2000.9866;
  p=10;
  onclick(){
    this.likecount++;
  }
}

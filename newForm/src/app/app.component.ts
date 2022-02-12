import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'newForm';

  m1(x: any) {
    console.log(x);
  }


  // ngForm

  m2() {
    this.title = "clicked";
    alert("botton clicked");
  }

  details = [
    {id: 101, name: 'krishna Kumar'},
    {id: 102, name: 'Ram Kumar'},
    {id: 103, name: 'Shyam Kumar'}
  ]
}

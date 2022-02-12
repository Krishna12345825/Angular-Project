import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'inputs-outputs';
  currentItem="laptop";
  item=['apple'];
  onitemadded(val:any)
  {
this.item.push(val);
  }
  
  fontsizepx=25;
}

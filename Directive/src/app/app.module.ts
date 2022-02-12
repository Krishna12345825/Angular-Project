import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { Child3Component } from './child3/child3.component';
import { MyDirectiveDirective } from './my-directive.directive';
import { NumberDirective } from './number.directive';

@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
    Child2Component,
    Child3Component,
    MyDirectiveDirective,
    NumberDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

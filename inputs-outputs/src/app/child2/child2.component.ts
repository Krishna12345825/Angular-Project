import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
 
@Input() item='';  
  @Output() newItemAdded=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onitemadd(itemval:any){
    this.newItemAdded.emit(itemval);
  }

}

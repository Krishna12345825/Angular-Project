import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component implements OnInit {

  @Input() size:any;
  @Output() sizeChange=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  dec(){
   // this.size--;
   this.reSize(-1);
  }
  inc(){
  //  this.size++;
  this.reSize(1);
  }
  reSize(num:any){
    this.size=this.size+num;
    this.sizeChange.emit(this.size);
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private ac:ActivatedRoute) {
    this.ac.queryParamMap.subscribe(data=>{
      console.log(data.get('en'));
      console.log(data.get('name'));
    })
   }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostDetailService } from '../post-detail.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
   id:any;  //variable 
   pdata:any; // variable

   
  constructor(private activatedRoute:ActivatedRoute,private service:PostDetailService) {

    this.activatedRoute.paramMap.subscribe(data=>{
      this.id=data.get('id');
      this.service.getPost(this.id).subscribe(data=>this.pdata=data);
    })
   }

  ngOnInit(): void {
  }

}

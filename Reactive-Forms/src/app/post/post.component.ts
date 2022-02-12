import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  formdata:any ;// variable 
  constructor(private service:PostService) {
    service.getPost().subscribe(data=>this.formdata=data);
   }
   onupdate(id: number){
     let obj=JSON.stringify({title:'this is new title'})
     this.service.updatePost(id,obj).subscribe(data=>{
       this.formdata[id-1].title='this is new title';
     });
  }
  ondelete(id: number){
    this.service.deletePost(id).subscribe(data=>{
      this.formdata.splice((id-1),1);
    });
  }

  ngOnInit(): void {
  }

}

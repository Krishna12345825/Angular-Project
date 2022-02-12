import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHandler} from '@angular/common/http'
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
fdata:any; //variable
  constructor(private http:HttpClient) { 
    this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe(data=>this.fdata=data);

  }

  ngOnInit(): void {
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostDetailService {

  url="https://jsonplaceholder.typicode.com/posts/";
  constructor(private http:HttpClient) { 

  }
  getPost(id:any)
  {
    return this.http.get(this.url+id);
  }
}

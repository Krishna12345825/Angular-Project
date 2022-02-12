import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url="https://jsonplaceholder.typicode.com/posts";
   
  constructor(private http:HttpClient) {

   }
   getPost(){
     return this.http.get(this.url);
   }
   updatePost(id:number,obj: string){
     return this.http.patch(this.url+"/"+id,obj);
   }
   deletePost(id:number){
     return this.http.delete(this.url+"/"+id);
   }
}

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-http-service-demo',
  templateUrl: './http-service-demo.component.html',
  styleUrls: ['./http-service-demo.component.css']
})
export class HttpServiceDemoComponent  {

  formdata:any; //variable 
  constructor(private http:HttpClient) { 
    // http.get("https://jsonplaceholder.typicode.com/posts").subscribe(data=>{ this.formdata=data});

    http.get("https://randomuser.me/api").subscribe(data=>{ this.formdata=data});

  }
  onpost(){
    let obj=JSON.stringify({
      title: 'hello world',
      body: 'this is description',
      userId:1
    });
    this.http.post("https://jsonplaceholder.typicode.com/posts",obj).subscribe(data=>{console.log(data)});
  }

}

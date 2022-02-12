import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
 //courseservice;
 courses;
  constructor(service:CourseService) { 
    //this.courseservice=new CourseService();
   // this.courses= this.courseservice.getCourse
   this.courses=service. getCourse();
  }


  ngOnInit(): void {
  }

}

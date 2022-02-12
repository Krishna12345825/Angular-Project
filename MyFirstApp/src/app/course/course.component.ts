import { Component } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
private name='Java Lover';
price=5000;
duration=5;
getName(){
  return this.name;
}

}

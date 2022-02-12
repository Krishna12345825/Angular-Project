import { Inject, Injectable } from '@angular/core';

@Injectable()
export class CourseService {

  constructor(@Inject('num') private num:number) { }

  getCourse(){
    // serve hit
    return ['java', 'Python','C','C++','Kotlin'];
  }
}

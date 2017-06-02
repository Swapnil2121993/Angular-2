import {Component} from '@angular/core';
import {CourseService} from '../app/course/course.service';

@Component({
  selector: 'cm-app',
  template: `
  <div><h1>{{pageTitle}}</h1>
  <course-list></course-list>
  </div>
  `,
  providers:[CourseService]
})

export class AppComponent{
  pageTitle:string ='Course Management';
}

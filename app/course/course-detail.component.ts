import {Component} from '@angular/core';
import {IcourseList} from './course-list';

@Component({
  moduleId:module.id,
  templateUrl:'course-detail.component.html',
})

export class CourseDetailComponent{
  pageTitle:string = "Course Detail";
  courses:IcourseList;

}

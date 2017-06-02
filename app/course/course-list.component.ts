import {Component,OnInit} from '@angular/core';
import {IcourseList} from './course-list';
import {CourseService} from './course.service';

@Component({
  selector:'course-list',
  moduleId:module.id,
  templateUrl:'course-list.component.html',
  styleUrls:['course-list.component.css'],

})

export class CourseListComponent implements OnInit{
  courseTitle:string="Course List";
  showImage:boolean=false;
  imageWidth:number=75;
  imageHeight:number=75;
  imagePath:string="../../app/assets/images/book5ed.jpg";
  listFilter:string=" ";
  errorMessage:string=" ";


  courses:IcourseList[]

   constructor(private _courseService:CourseService){

   }

toggleImage():void{
  this.showImage=!this.showImage;
}

ngOnInit():void{
  this._courseService.getCourses()
      .subscribe(courses => this.courses = courses,
                 error => this.errorMessage = <any>error
          );
}

onRatingClicked(message:string):void {
  this.courseTitle="Course List :" +message;

}

}

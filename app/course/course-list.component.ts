import {Component,OnInit} from '@angular/core';
import {IcourseList} from './course-list';

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


  courses:IcourseList[]=[
    {
    "Name":"Distributed System",
    "Id":"CSCI-656",
    "Major":"Computer Science",
    "Book":"Pearson",
    "rating":3.3,
  },
  {
    "Name":"Java Networking",
    "Id":"CSCi 432",
    "Major":"Computer Science",
    "Book":"Java Rmi",
    "rating":4.2,
  },

];

toggleImage():void{
  this.showImage=!this.showImage;
}

ngOnInit():void{
  console.log("onInit")
}

onRatingClicked(message:string):void {
  this.courseTitle="Course List :" +message;

}

}

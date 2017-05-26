import {PipeTransform, Pipe} from '@angular/core';
import {IcourseList} from './course-list';

@Pipe({
  name:'courseFilter',
})

export class CourseFilterPipe implements PipeTransform {
    transform(value:IcourseList[],filterBy:string) : IcourseList[]{

      filterBy=filterBy ? filterBy.toLocaleLowerCase():null;
      return filterBy ? value.filter((courses:IcourseList)=>
      courses.Name.toLocaleLowerCase().indexOf(filterBy)!==-1):value;

  }


}

import {Injectable} from '@angular/core';
import {IcourseList} from './course-list';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()

export class CourseService {

  private _courseUrl='../../api/course.json';

  constructor(private _http:Http){  }

  getCourses(): Observable <IcourseList[]> {
    return this._http.get(this._courseUrl)
          .map((response:Response) => <IcourseList[]> response.json())
          .do(data => console.log('All:' + JSON.stringify(data)))
          .catch(this.handleError);
}

private handleError(error: Response){
  console.log(error)
  return Observable.throw(error.json().error || 'Server error');
}

  }

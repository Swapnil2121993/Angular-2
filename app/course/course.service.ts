import {Injectable} from '@angular/core';
import {IcourseList} from './course-list';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()

export class CourseService {

  getCourses() : IcourseList[] {
  return  [
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
       "rating":4.2
      },

      {
       "Name":"Algorithm & Data Structure",
       "Id":"CSCI 655",
       "Major":"Computer Science",
       "Book":" Algorthm",
       "rating":3.2
      },

      {
       "Name":"Programming language",
       "Id":"CSCI 822",
       "Major":"Computer Science",
       "Book":"JavaScript future of Development",
       "rating":4.6
      },
    ]

  }
}


//   private _courseUrl='../../api/course.json';
//
//   constructor(private _http:Http){  }
//
//   getCourses(): Observable <IcourseList[]> {
//     return this._http.get(this._courseUrl)
//           .map((response:Response) => <IcourseList[]>response.json())
//           .do(data =>JSON.parse(JSON.stringify(data || null)))
//           .catch(this.handleError)
// }
//
// private handleError(error: Response | any){
//   let errMsg: string;
//    if (error instanceof Response) {
//      const body = error.json() || '';
//      const err = body.error || JSON.stringify(body);
//      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
//    } else {
//      errMsg = error.message ? error.message : error.toString();
//    }
//    console.error(errMsg);
//    return Observable.throw(errMsg);
//  }

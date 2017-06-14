"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
var CourseService = (function () {
    function CourseService() {
    }
    CourseService.prototype.getCourses = function () {
        return [
            {
                "Name": "Distributed System",
                "Id": "CSCI-656",
                "Major": "Computer Science",
                "Book": "Pearson",
                "rating": 3.3,
            },
            {
                "Name": "Java Networking",
                "Id": "CSCi 432",
                "Major": "Computer Science",
                "Book": "Java Rmi",
                "rating": 4.2
            },
            {
                "Name": "Algorithm & Data Structure",
                "Id": "CSCI 655",
                "Major": "Computer Science",
                "Book": " Algorthm",
                "rating": 3.2
            },
            {
                "Name": "Programming language",
                "Id": "CSCI 822",
                "Major": "Computer Science",
                "Book": "JavaScript future of Development",
                "rating": 4.6
            },
        ];
    };
    return CourseService;
}());
CourseService = __decorate([
    core_1.Injectable()
], CourseService);
exports.CourseService = CourseService;
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
//# sourceMappingURL=course.service.js.map
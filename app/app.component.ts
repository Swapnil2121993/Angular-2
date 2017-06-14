import {Component} from '@angular/core';
import {CourseService} from '../app/course/course.service';

@Component({
  selector: 'cm-app',
  template: `
  <div>
         <nav class='navbar navbar-default'>
             <div class='container-fluid'>
                 <a class='navbar-brand'>{{pageTitle}}</a>
                 <ul class='nav navbar-nav'>
                     <li><a [routerLink]="['/welcome']">Home</a></li>
                     <li><a [routerLink]="['/courses']">Course List</a></li>
                 </ul>
             </div>
         </nav>
         <div class='container'>
             <router-outlet></router-outlet>
         </div>
      </div>

  `,
  providers:[CourseService]
})

export class AppComponent{
  pageTitle:string ='Course Management';
}

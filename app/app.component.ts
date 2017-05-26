import {Component} from '@angular/core';

@Component({
  selector: 'cm-app',
  template: `
  <div><h1>{{pageTitle}}</h1>
  <course-list></course-list>
  </div>
  `
})
export class AppComponent{
  pageTitle:string ='Course Management';
}

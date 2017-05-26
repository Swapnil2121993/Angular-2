import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppComponent }  from './app.component';
import {CourseListComponent} from './course/course-list.component';
import {courseFilterPipe} from './course/course-filter.pipe';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
  ],
  declarations: [
    AppComponent ,
    CourseListComponent,
    courseFilterPipe,

  ],
  bootstrap:[ AppComponent ]
})
export class AppModule { }

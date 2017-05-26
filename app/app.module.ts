import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppComponent }  from './app.component';
import {CourseListComponent} from './course/course-list.component';
import {CourseFilterPipe} from './course/course-filter.pipe';
import {StarComponent} from './shared/star.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
  ],
  declarations: [
    AppComponent ,
    CourseListComponent,
    CourseFilterPipe,
    StarComponent,
    
  ],
  bootstrap:[ AppComponent ]
})
export class AppModule { }

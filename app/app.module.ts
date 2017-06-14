import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppComponent }  from './app.component';
import {CourseListComponent} from './course/course-list.component';
import {CourseDetailComponent} from './course/course-detail.component';
import {WelcomeComponent} from './home/welcome.component';
import {CourseFilterPipe} from './course/course-filter.pipe';
import {StarComponent} from './shared/star.component';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path:'courses', component: CourseListComponent},
      {path:'course/:id', component: CourseDetailComponent},
      {path:'welcome', component: WelcomeComponent},
      {path: '', redirectTo:'welcome', pathMatch:'full'},
      {path:'**', redirectTo:'welcome', pathMatch:'full'}

    ])
  ],
  declarations: [
    AppComponent ,
    CourseListComponent,
    CourseFilterPipe,
    StarComponent,
    CourseDetailComponent,
    WelcomeComponent

  ],
  bootstrap:[ AppComponent ]
})
export class AppModule { }

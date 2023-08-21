import { Component, OnInit } from '@angular/core';
import { CourseI } from 'src/app/models/interface';
import { CoursesService } from 'src/app/shared/services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses: any[] = [];

  constructor(private api: CoursesService){}
  ngOnInit(): void {
    this.api.getCourses().subscribe((data: any) =>{
      this.courses = [...data]
      // console.log(data);
      
    });
    
  }
}

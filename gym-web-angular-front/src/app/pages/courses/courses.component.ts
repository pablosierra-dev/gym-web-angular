import { Component, OnInit } from '@angular/core';
import { CourseI } from 'src/app/models/interface';
import { CoursesService } from 'src/app/shared/services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  listado!: CourseI[];

  constructor(private courseApi: CoursesService){}
  ngOnInit(): void {
    this.courseApi.getCourses().subscribe((data: any) => {
      this.listado = [...data]
    })
  }
}

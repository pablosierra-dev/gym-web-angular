import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from 'src/app/shared/services/courses.service';
import { ClassI } from 'src/app/models/class';

@Component({
  selector: 'app-courses-detail',
  templateUrl: './courses-detail.component.html',
  styleUrls: ['./courses-detail.component.scss']
})
export class CoursesDetailComponent implements OnInit{

  courseDetails: ClassI | undefined;

  constructor(private route: ActivatedRoute, private coursesService: CoursesService){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const courseId = params.get('id');
      if (courseId !== null) {
        this.coursesService.getCourseDetail(courseId).subscribe((data: any) => {
          this.courseDetails = data;
        });
      }
    });
  }
}

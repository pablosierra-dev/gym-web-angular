import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses-detail',
  templateUrl: './courses-detail.component.html',
  styleUrls: ['./courses-detail.component.scss']
})
export class CoursesDetailComponent implements OnInit{

  courseId: string = "";

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const courseId = params.get('id');
      if (courseId !== null) {
        this.courseId = courseId;
      }
    });
  }
}

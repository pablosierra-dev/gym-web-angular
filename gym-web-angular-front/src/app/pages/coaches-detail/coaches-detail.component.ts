import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CoachI } from "src/app/models/coaches";
import { CoachesServices } from "src/app/shared/services/coaches.service";

@Component({
  selector: "app-coaches-detail",
  templateUrl: "./coaches-detail.component.html",
})
export class CoachesDetailComponent implements OnInit{

  coachDetails: CoachI | undefined;

  constructor(private route: ActivatedRoute, private coachesService: CoachesServices){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const coachId = params.get('id');
      if (coachId !== null) {
        this.coachesService.getCoachDetail(coachId).subscribe((data: any) => {
          this.coachDetails = data;
          console.log(data);
          
        });
      }
    });
  }
}
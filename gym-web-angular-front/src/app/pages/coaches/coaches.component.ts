import { Component, OnInit } from "@angular/core";
import { CoachesServices} from "src/app/shared/services/coaches.service";
import { CoachI } from "src/app/models/coaches";

@Component({
  selector: "app-coaches",
  templateUrl: "./coaches.component.html",
  styleUrls: ['./coaches.component.scss']
})
export class CoachesComponent implements OnInit {
  coaches: any[] = [];
  constructor(private coachApi: CoachesServices){}
    ngOnInit(): void {
      this.coachApi.allCoaches().subscribe((data: any) => {
        this.coaches = [...data]
        // console.log(data);
      })
    }
  }

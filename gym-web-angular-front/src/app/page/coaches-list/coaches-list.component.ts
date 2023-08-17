import { Component, OnInit } from "@angular/core";
import { CoachesServices} from "src/app/shared/services/coaches.service";
import { CoachI } from "src/app/models/coaches";

@Component({
  selector: "app-coaches-list",
  templateUrl: "./coaches-list.component.html",
  styleUrls: ["./coaches-list.component.css"]
})
export class CoachesListComponent implements OnInit {
  coaches: CoachI[] = [];

  constructor(private coachesServ: CoachesServices) {}

  public loadCoaches() {
    this.coachesServ
      .allCoaches()
      .subscribe((response: CoachI[]) => (this.coaches = response));
  }

  ngOnInit() {
    this.loadCoaches();
  }
}
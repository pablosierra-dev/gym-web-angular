import { Component, OnInit } from "@angular/core";
import { CoachesServices} from "src/app/shared/services/coaches.service";
import { CoachI } from "src/app/models/coaches";

@Component({
  selector: "app-coaches-list",
  templateUrl: "./coaches-list.component.html",
})
export class CoachListComponent implements OnInit {
  coaches: CoachI[] = [];
 
  console = console
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
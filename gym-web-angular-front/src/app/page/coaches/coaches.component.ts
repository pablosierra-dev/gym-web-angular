import { Component, OnInit, Input } from "@angular/core";
import { CoachI } from "src/app/models/coaches";

@Component({
  selector: "app-coaches-details",
  templateUrl: "./coaches.component.html",
})
export class CoachesDetailsComponent implements OnInit {
  @Input()
  coach!: CoachI;

  constructor() {}

  ngOnInit() {}
}
import { Component, OnInit } from "@angular/core";
import { StudentenService } from "../studenten.service";

@Component({
  selector: "app-lijst",
  templateUrl: "./lijst.component.html",
  styleUrls: ["./lijst.component.css"]
})
export class LijstComponent implements OnInit {
  studenten;
  constructor(private ss: StudentenService) {}

  ngOnInit() {
    this.ss.getStudenten().then(json => (this.studenten = json));
  }

  requestNaarServer(): void {
    this.ss.getStudenten;
  }
}

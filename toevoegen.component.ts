import { Component, OnInit } from "@angular/core";
import { StudentenService } from "../studenten.service";
import { FormGroup, FormControl } from "@angular/forms";
@Component({
  selector: "app-toevoegen",
  templateUrl: "./toevoegen.component.html",
  styleUrls: ["./toevoegen.component.css"]
})
export class ToevoegenComponent implements OnInit {
  profileForm = new FormGroup({
    naam: new FormControl(""),
    geboortedatum: new FormControl("")
  });
  constructor(private ss: StudentenService) {}

  ngOnInit() {}
  onSubmit() {
    console.log(this.profileForm.value);
    this.ss
    .addStudent(this.profileForm.value)
    .then(input => console.log(input));
    }
}

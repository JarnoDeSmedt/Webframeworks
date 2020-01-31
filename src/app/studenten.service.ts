import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class StudentenService {
  constructor() {}

  getStudenten(): Promise<string> {
    return fetch("http://localhost:3000/users", {
      method: "GET"
    }).then(response => response.json());
  }
  addStudent(data): Promise<string> {
    return fetch("http://localhost:3000/users/toevoegen", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    }).then(response => response.json());
  }
}

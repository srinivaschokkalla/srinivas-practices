import { Component, OnInit } from "@angular/core";
import { User } from "../user";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-template-derive",
  templateUrl: "./template-derive.component.html",
  styleUrls: ["./template-derive.component.css"],
})
export class TemplateDeriveComponent implements OnInit {
  model = new User();
  userForm: any;
  constructor() {}
  Skill: string[] = ["Angular", "Csharp", "PHP", "ROR", "SQL Server"];
  ngOnInit() {}
  onSubmit(userForm) {
    this.userForm.reset(userForm);
  }
}

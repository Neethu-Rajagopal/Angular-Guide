import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-password",
  templateUrl: "./password.component.html",
  styleUrls: ["./password.component.scss"]
})
export class PasswordComponent implements OnInit {
  form = new FormGroup({
    password: new FormControl("", [
      Validators.required,
      Validators.minLength(8)
    ])
  });

  constructor() {}

  ngOnInit(): void {}
}

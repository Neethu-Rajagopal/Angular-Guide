import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthService } from "./../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  signUpForm = new FormGroup({
    firstName: new FormControl("", Validators.required),
    password: new FormControl("", [Validators.required])
  });

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  registerDetails() {
    // this.submitted = true;

    // stop here if form is invalid
    // if (this.loginForm.invalid) {
    //   return;
    // }

    // this.loading = true;
    this.authService
      .login(
        this.signUpForm.controls.firstName.value,
        this.signUpForm.controls.password.value
      )
      .subscribe(
        data => {
          this.router.navigate(["/template"]);
          console.log("authenticated", data);
        },
        error => {
          // this.error = error;
          // this.loading = false;
          console.log("errors");
        }
      );
  }
}

// import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AuthRoutingModule } from "./auth-routing.module";

//components in auth module
import { AuthComponent } from "./auth.component";
import { LoginComponent } from "./login/login.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { HttpClientModule } from "@angular/common/http";
import { HiddenDirective } from "./../directives/hidden.directive";
import { HighlightDirective } from "../directives/highlight.directive";
import { PasswordDirective } from "./../directives/password.directive";

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    SignUpComponent,
    HiddenDirective,
    PasswordDirective,
    HighlightDirective
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    HttpClientModule,
    HiddenDirective,
    PasswordDirective,
    HighlightDirective
  ]
})
export class AuthModule {}

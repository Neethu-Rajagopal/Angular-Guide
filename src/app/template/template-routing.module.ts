import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TemplateComponent } from "./template.component";
import { HiddenComponent } from "./hidden/hidden.component";
import { PasswordComponent } from "./password/password.component";
import { RadioHightlightComponent } from "./radio-hightlight/radio-hightlight.component";
import { HighlightHoverComponent } from "./highlight-hover/highlight-hover.component";
import { HighlightComponent } from "./highlight/highlight.component";

const routes: Routes = [
  {
    path: "",
    component: TemplateComponent
  },
  {
    path: "highlight",
    component: HighlightComponent
  },
  {
    path: "highlight-hover",
    component: HighlightHoverComponent
  },
  {
    path: "hidden",
    component: HiddenComponent
  },
  {
    path: "password",
    component: PasswordComponent
  },
  {
    path: "radio-highlight",
    component: RadioHightlightComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule {}

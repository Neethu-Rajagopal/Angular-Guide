import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "pipes",
    loadChildren: () =>
      import("./pipes-app/pipes-app.module").then(m => m.PipesAppModule)
  },
  {
    path: "template",
    loadChildren: () =>
      import("./template/template.module").then(m => m.TemplateModule)
  },
  {
    path: "",
    redirectTo: "",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

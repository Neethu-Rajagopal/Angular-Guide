import { LayoutComponent } from "./layout/layout.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "auth",
    loadChildren: () => import("./auth/auth.module").then(m => m.AuthModule)
  },
  { path: "", redirectTo: "/auth", pathMatch: "full" },
  {
    path: "template",
    loadChildren: () =>
      import("./template/template.module").then(m => m.TemplateModule)
  },
  {
    path: "layout",
    component: LayoutComponent
  },
  //for default path, any path that doesn't match the above mentioned paths will be redirected to this
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

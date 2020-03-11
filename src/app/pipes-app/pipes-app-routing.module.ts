import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PipesAppComponent } from "./pipes-app.component";

const routes: Routes = [
  {
    path: "",
    component: PipesAppComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PipesAppRoutingModule {}

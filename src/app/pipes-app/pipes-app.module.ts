import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PipesAppRoutingModule } from "./pipes-app-routing.module";
// import { FirstLetterCapitalPipe } from "./../pipes/firstLetterCapital.pipe";

@NgModule({
  declarations: [],
  imports: [CommonModule, PipesAppRoutingModule],
  // exports: [FirstLetterCapitalPipe]
})
export class PipesAppModule {}

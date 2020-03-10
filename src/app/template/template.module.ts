import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TemplateRoutingModule } from "./template-routing.module";
import { TemplateComponent } from "./template.component";
import { BgColorDirective } from "./../directives/bg-color.directive";

@NgModule({
  declarations: [TemplateComponent, BgColorDirective],
  imports: [CommonModule, TemplateRoutingModule],
  exports: [BgColorDirective]
})
export class TemplateModule {}

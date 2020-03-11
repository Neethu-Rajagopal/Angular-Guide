import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedRoutingModule } from "./shared-routing.module";
import { SharedComponent } from "./shared.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { CapitalPipe } from "./../pipes/capital.pipe";

@NgModule({
  declarations: [SharedComponent, SidebarComponent, CapitalPipe],
  imports: [CommonModule, SharedRoutingModule],
  exports: [SidebarComponent, SharedComponent, CapitalPipe]
})
export class SharedModule {}

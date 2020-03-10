import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedRoutingModule } from "./shared-routing.module";
import { SharedComponent } from "./shared.component";
import { SidebarComponent } from "./sidebar/sidebar.component";

@NgModule({
  declarations: [SharedComponent, SidebarComponent],
  imports: [CommonModule, SharedRoutingModule],
  exports: [SidebarComponent, SharedComponent]
})
export class SharedModule {}

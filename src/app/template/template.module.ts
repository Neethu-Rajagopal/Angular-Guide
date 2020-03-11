import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TemplateRoutingModule } from "./template-routing.module";
import { TemplateComponent } from "./template.component";
import { BgColorDirective } from "./../directives/bg-color.directive";
import { HighlightComponent } from "./highlight/highlight.component";
import { HighlightHoverComponent } from "./highlight-hover/highlight-hover.component";
import { HighlightDirective } from "./../directives/highlight.directive";
import { HiddenDirective } from "./../directives/hidden.directive";
import { PasswordDirective } from "./../directives/password.directive";
import { HiddenComponent } from './hidden/hidden.component';
import { PasswordComponent } from './password/password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RadioHightlightComponent } from './radio-hightlight/radio-hightlight.component';
import { HighlightRadioDirective } from '../directives/highlight-radio.directive';

@NgModule({
  declarations: [
    TemplateComponent,
    BgColorDirective,
    HighlightComponent,
    HighlightHoverComponent,
    HighlightDirective,
    PasswordDirective,
    HiddenDirective,
    HiddenComponent,
    PasswordComponent,
    RadioHightlightComponent,
    HighlightRadioDirective
  ],
  imports: [CommonModule, TemplateRoutingModule, FormsModule, ReactiveFormsModule],
  exports: [
    BgColorDirective,
    HighlightDirective,
    PasswordDirective,
    HiddenDirective,
    HighlightRadioDirective
  ]
})
export class TemplateModule {}

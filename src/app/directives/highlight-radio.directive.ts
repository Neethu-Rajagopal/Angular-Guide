import { Directive, ElementRef, Input, Renderer2 } from "@angular/core";

@Directive({
  selector: "[appHighlightRadio]"
})
export class HighlightRadioDirective {
  @Input("appHighlightRadio") highLightColor: string = "blue";

  ngOnChanges() {
    this.el.nativeElement.style.color = this.highLightColor;
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {
    el.nativeElement.style.color = this.highLightColor;
    //in angular universal and server side rendering, full on DOM-implementation on node.js servers are not possible.
    renderer.setStyle(el.nativeElement, "backgroundColor", "yellow");
  }
}

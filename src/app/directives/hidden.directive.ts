import { Directive, ElementRef, Renderer2 } from "@angular/core";

@Directive({
  selector: "[appHidden]"
})
export class HiddenDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    renderer.setStyle(el.nativeElement, "display", "none");
  }
}

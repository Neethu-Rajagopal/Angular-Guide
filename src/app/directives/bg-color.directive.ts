import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: "[appBgColor]"
})
export class BgColorDirective {
  constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundColor = "blue";
    el.nativeElement.style.color = "white";
  }
}

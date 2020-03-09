import { Directive, ElementRef, Input, HostListener } from "@angular/core";

@Directive({
  selector: "[highlightBackground]"
})
export class HighlightDirective {
  @Input() defaultColor: string;
  @Input() highlightColor: string;

  constructor(private el: ElementRef) {}

  @HostListener("mouseenter") onMouseEnter() {
    this.highLight(this.highlightColor || this.defaultColor || "red");
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.highLight(null);
  }

  private highLight(bgColor: string): void {
    this.el.nativeElement.style.backgroundColor = bgColor;
  }
}

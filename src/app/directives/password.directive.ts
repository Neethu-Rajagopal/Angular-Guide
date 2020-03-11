import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: "[appPassword]"
})
export class PasswordDirective {
  private _shown: boolean = false;

  constructor(private el: ElementRef) {
    this.setUp();
  }

  toggle(span) {
    this._shown = !this._shown;
    if (this._shown) {
      this.el.nativeElement.setAttribute("type", "text");
      span.innerHTML = "<i class='fa fa-eye-slash' aria-hidden='true'>";
    } else if (!this._shown) {
      this.el.nativeElement.setAttribute("type", "password");
      span.innerHTML = "<i class='fa fa-eye' aria-hidden='true'>";
    }
  }

  setUp() {
    const parent = this.el.nativeElement.parentNode;
    const span = document.createElement("span");
    span.innerHTML = "<i class='fa fa-eye' aria-hidden='true'>";
    span.addEventListener("click", event => {
      this.toggle(span);
    });
    parent.appendChild(span);
  }
}

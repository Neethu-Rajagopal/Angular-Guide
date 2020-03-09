import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: "[appPassword]"
})
export class PasswordDirective {
  constructor(private el: ElementRef) {
    this.setUp();
    console.log('hi')
  }

  setUp() {
    const parent = this.el.nativeElement.parentNode;
    const span = document.createElement('span');
    span.innerHTML = "Show password";
    span.addEventListener("click", event => {
      console.log("clicked");
    });
    parent.appendChild(span);
  }
}

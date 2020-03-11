import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-radio-hightlight",
  templateUrl: "./radio-hightlight.component.html",
  styleUrls: ["./radio-hightlight.component.scss"]
})
export class RadioHightlightComponent implements OnInit {
  color: string = "blue";

  constructor() {}

  ngOnInit(): void {}

  selectedRadio(color: string): void {
    this.color = color;
  }
}

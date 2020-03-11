import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-template",
  templateUrl: "./template.component.html",
  styleUrls: ["./template.component.scss"]
})
export class TemplateComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  lists: any[] = [
    { name: "Highlight", route: "highlight" },
    { name: "Highlight on Hover", route: "highlight-hover" },
    { name: "Hidden Directive", route: "hidden" },
    { name: "Password Directive", route: "password" },
    { name: "Radio Highlight Directive", route: "radio-highlight" }
  ];
}

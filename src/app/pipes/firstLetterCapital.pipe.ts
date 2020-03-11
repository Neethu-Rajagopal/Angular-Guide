import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "firstLetterCapital" })
export class FirstLetterCapitalPipe implements PipeTransform {
  transform(value: string, arg: string[]): any {
    if (!value) {
      return value;
    }
    return value.replace("/wS*/g", str => {
      return str.charAt(0).toUpperCase(), str.substr(1).toLowerCase();
    });
  }
}

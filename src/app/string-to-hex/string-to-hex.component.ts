import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-string-to-hex",
  templateUrl: "./string-to-hex.component.html",
  styleUrls: ["./string-to-hex.component.scss"],
})
export class StringToHexComponent implements OnInit {
  hexOutPut: string = "";
  constructor() {}

  ngOnInit(): void {}

  public convertToHex(str: string) {
    this.hexOutPut = "";
    let hex = "";
    for (let i = 0; i < str.length; i++) {
      hex += str.charCodeAt(i).toString(16);
      if (i < str.length - 1) {
        hex += " ";
      }
    }
    this.hexOutPut = hex;
  }
}

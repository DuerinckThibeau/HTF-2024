import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-replace-string",
  templateUrl: "./replace-string.component.html",
  styleUrls: ["./replace-string.component.scss"],
})
export class ReplaceStringComponent implements OnInit {
  arrayList: string[] = [
    "csPB",
    "gqst",
    "YJlf",
    "QFQM",
    "zjua",
    "adiz2",
    "hwb2",
    "OtNLI",
    "ntPNd",
    "v5v5H",
  ];
  index: number = 0;
  replacement: string = "";
  resultArray: string[] = [];

  constructor() {}

  ngOnInit(): void {}

  replaceStringAtIndex() {
    if (this.index >= 0 && this.index < this.arrayList.length) {
      this.arrayList[this.index] = this.replacement;
    }
    this.resultArray = [...this.arrayList];
  }
}

import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-reversestring",
  templateUrl: "./reversestring.component.html",
  styleUrls: ["./reversestring.component.scss"],
})
export class ReversestringComponent implements OnInit {
  inputString: string = "";
  reversedString: string = "";

  constructor() {}

  ngOnInit(): void {}

  reverseString() {
    this.reversedString = this.inputString.split("").reverse().join("");
  }
}

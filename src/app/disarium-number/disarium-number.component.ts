import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-disarium-number",
  templateUrl: "./disarium-number.component.html",
  styleUrls: ["./disarium-number.component.scss"],
})
export class DISARIUMNUMBERComponent implements OnInit {
  num: number = 0;
  result: string = "";

  constructor() {}

  ngOnInit(): void {}

  CalculateDisariumNumber() {
    let sum = 0;
    let temp = this.num;
    let len = this.num.toString().length;
    while (temp > 0) {
      let rem = temp % 10;
      sum = sum + Math.pow(rem, len);
      temp = Math.floor(temp / 10);
      len--;
    }
    if (sum === this.num) {
      console.log(this.num + " is a Disarium number");
      this.result = this.num + " is a Disarium number";
    } else {
      console.log(this.num + " is not a Disarium number");
      this.result = this.num + " is not a Disarium number";
    }
  }
}

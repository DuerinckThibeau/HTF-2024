import { Component, OnInit } from "@angular/core";

interface AnimatedChar {
  value: string;
  final: string;
  reversed: boolean;
}

@Component({
  selector: "app-reversestring",
  templateUrl: "./reversestring.component.html",
  styleUrls: ["./reversestring.component.scss"],
})
export class ReversestringComponent implements OnInit {
  inputString: string = "";
  reversedString: string = "";
  animatedChars: AnimatedChar[] = [];
  readonly CHAR_DELAY = 100;

  constructor() {}

  ngOnInit(): void {}

  reverseString() {
    if (!this.inputString) return;

    this.reversedString = this.inputString.split("").reverse().join("");
    this.animateReverse();
  }

  animateReverse() {
    // Initialize animation array with original characters
    this.animatedChars = this.inputString.split("").map((char) => ({
      value: char,
      final: char,
      reversed: false,
    }));

    const finalPositions = this.reversedString.split("");

    // Animate each character
    this.animatedChars.forEach((char, index) => {
      setTimeout(() => {
        char.value = finalPositions[index];
        char.reversed = true;
      }, index * this.CHAR_DELAY);
    });
  }
}

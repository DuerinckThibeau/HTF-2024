import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-morse-code",
  templateUrl: "./morse-code.component.html",
  styleUrls: ["./morse-code.component.scss"],
})
export class MorseCodeComponent implements OnInit {
  constructor() {}

  morseCodeOutput: string = "";
  ngOnInit(): void {}

  decodeMorse(morseCode: string) {
    const ref: { [key: string]: string } = {
      ".-": "a",
      "-...": "b",
      "-.-.": "c",
      "-..": "d",
      ".": "e",
      "..-.": "f",
      "--.": "g",
      "....": "h",
      "..": "i",
      ".---": "j",
      "-.-": "k",
      ".-..": "l",
      "--": "m",
      "-.": "n",
      "---": "o",
      ".--.": "p",
      "--.-": "q",
      ".-.": "r",
      "...": "s",
      "-": "t",
      "..-": "u",
      "...-": "v",
      ".--": "w",
      "-..-": "x",
      "-.--": "y",
      "--..": "z",
      ".----": "1",
      "..---": "2",
      "...--": "3",
      "....-": "4",
      ".....": "5",
      "-....": "6",
      "--...": "7",
      "---..": "8",
      "----.": "9",
      "-----": "0",
    };

    this.morseCodeOutput = morseCode
      .split("   ")
      .map((a) =>
        a
          .split(" ")
          .map((b) => ref[b])
          .join("")
      )
      .join(" ")
      .toUpperCase();
  }
}

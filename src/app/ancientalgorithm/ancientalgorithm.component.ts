import { Component, OnInit } from "@angular/core";

interface AnimatedChar {
  value: string;
  shifted: boolean;
  originalValue: string;
  currentShift: number;
}

@Component({
  selector: "app-ancientalgorithm",
  templateUrl: "./ancientalgorithm.component.html",
  styleUrls: ["./ancientalgorithm.component.scss"],
})
export class AncientalgorithmComponent implements OnInit {
  inputString: string = "";
  decodedString: string = "";
  animatedChars: AnimatedChar[] = [];
  readonly SHIFT_AMOUNT = 3;
  readonly SHIFT_DELAY = 100;
  readonly CHAR_DELAY = 300;

  private readonly alphabet = "abcdefghijklmnopqrstuvwxyz";

  constructor() {}

  ngOnInit(): void {}

  caesarDecrypt(ciphertext: string, shift: number = 3): string {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let decryptedText = "";

    for (let i = 0; i < ciphertext.length; i++) {
      const char = ciphertext[i];
      const isUpperCase = char === char.toUpperCase();
      const lowerChar = char.toLowerCase();
      const index = alphabet.indexOf(lowerChar);

      if (index === -1) {
        decryptedText += char;
      } else {
        let newIndex = (index - shift + 26) % 26;
        let newChar = alphabet[newIndex];
        decryptedText += isUpperCase ? newChar.toUpperCase() : newChar;
      }
    }

    return decryptedText;
  }

  decodeString() {
    this.decodedString = this.caesarDecrypt(this.inputString);
    this.animateDecoding();
  }

  private getPreviousChar(char: string): string {
    if (!char.match(/[a-zA-Z]/)) return char;

    const isUpperCase = char === char.toUpperCase();
    const lowerChar = char.toLowerCase();
    let index = this.alphabet.indexOf(lowerChar);

    if (index === -1) return char;

    index = (index - 1 + 26) % 26;
    const previousChar = this.alphabet[index];
    return isUpperCase ? previousChar.toUpperCase() : previousChar;
  }

  animateDecoding() {
    // Initialize animation array with original characters
    this.animatedChars = this.inputString.split("").map((char) => ({
      value: char,
      originalValue: char,
      shifted: false,
      currentShift: 0,
    }));

    // Animate each character
    this.animatedChars.forEach((char, charIndex) => {
      setTimeout(() => {
        let currentShift = 0;

        const shiftInterval = setInterval(() => {
          currentShift++;
          char.value = this.getPreviousChar(char.value);
          char.currentShift = currentShift;

          if (currentShift >= this.SHIFT_AMOUNT) {
            clearInterval(shiftInterval);
            char.shifted = true;
          }
        }, this.SHIFT_DELAY);
      }, charIndex * this.CHAR_DELAY);
    });
  }
}

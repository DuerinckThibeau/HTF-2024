import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ancientalgorithm",
  templateUrl: "./ancientalgorithm.component.html",
  styleUrls: ["./ancientalgorithm.component.scss"],
})
export class AncientalgorithmComponent implements OnInit {
  inputString: string = "";
  decodedString: string = "";

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
  }
}

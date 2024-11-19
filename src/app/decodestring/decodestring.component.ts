import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-decodestring",
  templateUrl: "./decodestring.component.html",
  styleUrls: ["./decodestring.component.scss"],
})
export class DecodestringComponent implements OnInit {
  inputString: string = "";
  encodedString: string = "";
  decodedString: string = "";
  encodingType: string = "";

  ngOnInit(): void {}

  onInputChange() {
    this.decodedString = "";
    this.encodingType = "";
  }

  detectAndDecodeString() {
    this.encodedString = this.inputString;
    this.decodedString = "";
    this.encodingType = "";

    try {
      if (this.isBase64(this.encodedString)) {
        this.decodedString = atob(this.encodedString);
        this.encodingType = "Base64";
        return;
      }

      if (this.isURLEncoded(this.encodedString)) {
        this.decodedString = decodeURIComponent(this.encodedString);
        this.encodingType = "URL Encoding";
        return;
      }

      if (this.containsHTMLEntities(this.encodedString)) {
        this.decodedString = this.decodeHTMLEntities(this.encodedString);
        this.encodingType = "HTML Entities";
        return;
      }

      if (this.isCaesarCipher(this.encodedString)) {
        this.decodedString = this.caesarDecrypt(this.encodedString);
        this.encodingType = "Caesar Cipher (shift=3)";
        return;
      }

      this.encodingType = "Unknown encoding";
      this.decodedString = "Unable to detect encoding type";
    } catch (error) {
      this.encodingType = "Error";
      this.decodedString = "Failed to decode string";
    }
  }

  private isBase64(str: string): boolean {
    try {
      return btoa(atob(str)) === str;
    } catch (err) {
      return false;
    }
  }

  private isURLEncoded(str: string): boolean {
    try {
      return decodeURIComponent(str) !== str && str.indexOf("%") !== -1;
    } catch (err) {
      return false;
    }
  }

  private containsHTMLEntities(str: string): boolean {
    return /&[#A-Za-z0-9]+;/.test(str);
  }

  private decodeHTMLEntities(str: string): string {
    const textarea = document.createElement("textarea");
    textarea.innerHTML = str;
    return textarea.value;
  }

  private isCaesarCipher(str: string): boolean {
    return /^[A-Za-z\s]+$/.test(str);
  }

  private caesarDecrypt(ciphertext: string, shift: number = 3): string {
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
}

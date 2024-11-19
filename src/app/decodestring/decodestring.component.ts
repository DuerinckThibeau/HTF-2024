import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-decodestring",
  templateUrl: "./decodestring.component.html",
  styleUrls: ["./decodestring.component.scss"],
})
export class DecodestringComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  encodedString: string = "";
  decodedString: string = "";

  decodeString() {
    this.decodedString = atob(this.encodedString); // Base64 encoding/decoding
  }

  // Toevoeging: Verschillende soorten encoding herkennen en decoden (ook tonen welke encoding het is)
}

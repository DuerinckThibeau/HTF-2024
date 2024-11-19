import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-firstlastdaymonth",
  templateUrl: "./firstlastdaymonth.component.html",
  styleUrls: ["./firstlastdaymonth.component.scss"],
})
export class FirstlastdaymonthComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  month: number = 0;
  year: number = 0;
  result: string = "";

  findFirstAndLastDay() {
    if (this.month < 1 || this.month > 12 || this.year < 1) {
      this.result = "Voer aub een geldige datum in.";
      return;
    }

    const firstDay = new Date(this.year, this.month - 1, 1);
    const lastDay = new Date(this.year, this.month, 0);

    const options = { weekday: "long" } as const;
    const firstDayName = firstDay.toLocaleDateString("nl-NL", options);
    const lastDayName = lastDay.toLocaleDateString("nl-NL", options);

    this.result = `Eerste dag: ${firstDayName}, laatste dag: ${lastDayName}`;
  }
}

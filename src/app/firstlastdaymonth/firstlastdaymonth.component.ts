import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-firstlastdaymonth",
  templateUrl: "./firstlastdaymonth.component.html",
  styleUrls: ["./firstlastdaymonth.component.scss"],
})
export class FirstlastdaymonthComponent implements OnInit {
  month: number = 0;
  year: number = 0;
  result: string = "";
  calendar: any[] = [];
  showCalendar: boolean = false;
  firstDayName: string = "";
  lastDayName: string = "";
  lastDayOfMonth: number = 0;

  readonly DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  readonly MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  generateCalendar() {
    this.calendar = [];
    const date = new Date(this.year, this.month - 1, 1);
    const lastDay = new Date(this.year, this.month, 0).getDate();

    const firstDayIndex = date.getDay();
    let currentDay = 1;

    // Generate calendar grid
    for (let i = 0; i < 6; i++) {
      const week = [];
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDayIndex) {
          week.push(null);
        } else if (currentDay > lastDay) {
          week.push(null);
        } else {
          week.push(currentDay);
          currentDay++;
        }
      }
      this.calendar.push(week);
    }
  }

  findFirstAndLastDay() {
    if (this.month < 1 || this.month > 12 || this.year < 1) {
      this.result = "Please enter a valid date.";
      this.showCalendar = false;
      return;
    }

    const firstDay = new Date(this.year, this.month - 1, 1);
    const lastDay = new Date(this.year, this.month, 0);
    this.lastDayOfMonth = lastDay.getDate();

    const options = { weekday: "long" } as const;
    this.firstDayName = firstDay.toLocaleDateString("en-US", options);
    this.lastDayName = lastDay.toLocaleDateString("en-US", options);

    this.generateCalendar();
    this.showCalendar = true;
  }

  isSpecialDay(day: number | null): string {
    if (!day) return "";
    if (day === 1) return "first-day";
    if (day === this.lastDayOfMonth) return "last-day";
    return "";
  }

  ngOnInit(): void {}
}
